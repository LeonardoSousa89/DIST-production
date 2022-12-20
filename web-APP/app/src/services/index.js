import { storage } from './db'

import { toast } from 'react-toastify';

import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword, 
         signInWithPopup, 
         signOut } from 'firebase/auth'

import { ref, 
         uploadBytesResumable, 
         getDownloadURL
       } from 'firebase/storage';


export async function signUp(username, auth, email, password,  navigation){
    await createUserWithEmailAndPassword(auth, email.trim(), password.trim())
        .then(response=>{

            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid))

             //spring API creation user
             let URL=`${process.env.REACT_APP_API}/user-account/administration`

             let data={userId: response.user.uid, userName: username , email}
   
             let config={ method: 'POST', 
                 body: JSON.stringify(data),
                 headers:{
                     'Content-type':'application/json'
                 }
             }
 
             fetch(URL, config)
             .then(response=>{
                 
                 //all ok the firebase backend will send data to spring API 
                 response.json()
 
                 //all ok navigate to login page
                 navigation()
             })


        }).catch((e)=>{
            console.log(e.code)

            switch (e.code){
                case 'auth/email-already-in-use':
                    toast.error('Email already exist')
                break 
                case 'auth/missing-email':
                    toast.error("Email field can't be empty")
                break 
                case 'auth/invalid-email':
                    toast.error("Invalid email")
                break 
                case 'auth/weak-password':
                    toast.error("Password minimun 6 characters")
                break 
                case 'auth/internal-error':
                    toast.error("Password field can't be empty")
                break 
            }
        })
}


export async function createUserWithProvider(auth, provider, providerNavigation){
    await signInWithPopup(auth,provider)
        .then(response=>{

             let name=response.user.displayName
             let email=response.user.email

            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid)) 
            
            
            //spring API creation user
            let URL=`${process.env.REACT_APP_API}/user-account/administration`
            
            let data={userId: response.user.uid, userName: name , email}
            
            let config={ method: 'POST', 
            body: JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
        
        fetch(URL, config)
        .then(response=>{
            
            //all ok the firebase backend will send data to spring API 
            response.json()
            
            //all ok navigate to admin page
            providerNavigation()
        })

        })
        .catch((e)=>{
            console.log(e.code)

            switch (e.code){
                case 'auth/popup-closed-by-user':
                    toast.error('Do you need agree the terms')
                break 
                case 'auth/popup-blocked':
                    toast.error('Pop-up blocked by browser')
                break 
                case 'auth/cancelled-popup-request':
                    toast.error('Request canceled by pop-up blocked')
                break 
                case 'auth/account-exists-with-different-credential':
                    toast.error('Email already exist')
                break 
            }
        })
}


export async function signInWithEmailAndPass(auth, email, password, navigation){
    await signInWithEmailAndPassword(auth, email.trim(), password.trim())
        .then((response)=>{

            let msg="Welcome to admin page."
            localStorage.setItem("MSG", JSON.stringify(msg))
            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid))
            
            navigation(response.user.uid)
            WELCOME()

        }).catch((e)=>{
            console.log(e.code)

            switch (e.code){
                case 'auth/user-not-found':
                    toast.error('User not found')
                break
                case 'auth/wrong-password':
                    toast.error('Incorrect password')
                break
                case 'auth/invalid-email':
                    toast.error("Email field can't be empty")
                break
                case 'auth/internal-error':
                    toast.error("password field can't be empty")
                break
            }
        })
}


export async function signInWithProvider(auth, provider, providerNavigation){
    await signInWithPopup(auth,provider)
        .then(response=>{

            let msg="Welcome to admin page."
            localStorage.setItem("MSG", JSON.stringify(msg))
            localStorage.setItem("Admin", JSON.stringify(response))
            localStorage.setItem("ID", JSON.stringify(response.user.uid)) 
            
            providerNavigation(response.user.uid)
            WELCOME()
        })
        .catch((e)=>{
            console.log(e.code)
            switch (e.code){
                case 'auth/popup-closed-by-user':
                    toast.error('Do you need agree the terms')
                break 
                case 'auth/popup-blocked':
                    toast.error('Pop-up blocked by browser')
                break 
                case 'auth/cancelled-popup-request':
                    toast.error('Request canceled by pop-up blocked')
                break 
                case 'auth/account-exists-with-different-credential':
                    toast.error('Email already exist')
                break 
                case 'auth/invalid-credential':
                    toast.error('Error to validate your credentials')
                break 
                
            }

        })
}


export async function logOut(auth, navigation){
   await signOut(auth).then(()=>{
        localStorage.removeItem("Admin")
        localStorage.removeItem("ID")
        localStorage.removeItem("MSG")

        navigation()
        }).catch(e=>{
           toast.error(e)
        })
}


export function WELCOME(){
    let msg=localStorage.getItem("MSG")
    toast.info(msg)
}


export function protectRoute(navigation){
    let admin=localStorage.getItem("Admin")
    let id=localStorage.getItem("ID")

    if(!admin && !id){
        navigation()
    }
}


export function verifyRoute(){

    let deniedStorageRouteSignUp1=process.env.REACT_APP_SIGNUP_URL_DEV
    let deniedStorageRouteSignUp2=process.env.REACT_APP_SIGNUP_BASE_URL_DEV 
    let deniedStorageRouteLogin1=process.env.REACT_APP_LOGIN_DEV

    let deniedStorageRouteSignUp3=process.env.REACT_APP_SIGNUP_URL_PROD
    let deniedStorageRouteSignUp4=process.env.REACT_APP_SIGNUP_BASE_URL_PROD
    let deniedStorageRouteLogin2=process.env.REACT_APP_LOGIN_PROD
    
    let currentURL=window.location.href
 

    if( currentURL===deniedStorageRouteSignUp1 || 
        currentURL===deniedStorageRouteSignUp2 ||
        currentURL===deniedStorageRouteSignUp3 ||
        currentURL===deniedStorageRouteSignUp4 ||
        currentURL===deniedStorageRouteLogin1  ||
        currentURL===deniedStorageRouteLogin2  ){
        
        localStorage.removeItem("Admin")
        localStorage.removeItem("ID")
        localStorage.removeItem("MSG")
    }
}


export async function uploadProfilePhoto(e, storage, setImage){
        
    let ID=localStorage.getItem("ID")
    let userId=JSON.parse(ID)

    const file=e.target[0]?.files[0]

    if(!file) return

    const storageRef=ref(storage, `/userProfilePhoto/${userId}/userProfile`)

    const uploadPhoto=await uploadBytesResumable(storageRef, file)

    uploadPhoto.on(
        "state_changed",
            snapshot => {},error => {
            alert(error)
         },
        ()=>{
            getDownloadURL(uploadPhoto.snapshot.ref).then(url =>{
                setImage(url)
            })
        }
    )
}


export async function getProfilePhotoUploaded(setImage){
    
    let ID=localStorage.getItem("ID")
    let userId=JSON.parse(ID)

    const reference=ref(storage, `/userProfilePhoto/${userId}/userProfile`)

    await getDownloadURL(reference).then(response=>{
      setImage(response)
    })
}


export async function getProfileData(setUserName, setUserEmail){
    
    let ID=localStorage.getItem("ID")
    let userId=JSON.parse(ID)

    let URL=`${process.env.REACT_APP_API}/user-account/${userId}/administration`
    
    let config={method: 'GET'}

    await fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    setUserName(response.userName.substring(0, 16))
                    setUserEmail(response.email.substring(0, 32))
                })
            }
            if(response.status === 404){
                toast.error('Resource not found')
            }
            if(response.status === 500 || response.status === 503 || response.status === 504){
                toast.error("There's an error with server")
            }
        })
        .then(response=>response)
        .catch(e=>toast.error(e))
}


export async function insertWorker(workerName,
    workerEmail,
    workerPost,
    workerAddress,
    workerPhoneNumber,
    workerAge,
    userId,
    listWorkersDisplay,
    formFieldCleanUp){


    let URL=`${process.env.REACT_APP_API}/administration`

    const data={workerName,
        workerEmail,
        workerPost,
        workerAddress,
        workerPhoneNumber,
        workerAge,
        admin:{userId}
    }  

    let config={ method: 'POST', 
        body: JSON.stringify(data),
        headers:{
        'Content-type':'application/json'
        }
    }

    await fetch(URL, config).then(response=>{
        if(response.status === 201){
            response.json()
            toast.info('worker created')
            listWorkersDisplay()
            formFieldCleanUp()
        }
        if(response.status === 400){
            toast.error('Was an error, verify if some field is empty or perhaps your email already exists')
        }
        if(response.status === 500 || response.status === 503 || response.status === 504){
            toast.error("There's an error with server")
        }
    }).catch(e=>toast.error(e))
}


export async function getWorkersData(setData, page){
    
    let size=5
    let ID=localStorage.getItem("ID")
    let userId=JSON.parse(ID)
    let URL=`${process.env.REACT_APP_API}/${userId}/administration?page=${page}&size=${size}`
            
    let config={method: 'GET'}

    await fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    let content=response.content
                    setData(content)
                })
            }
            if(response.status === 404){}
            if(response.status === 500 || response.status === 503 || response.status === 504){
                toast.error("There's an error with server")
            }
        })
        .then(response=>response)
        .catch(e=>toast.error(e))
}


export async function pagination(setData, page){

    let size=5
    let ID=localStorage.getItem("ID")
    let userId=JSON.parse(ID)
    let URL=`${process.env.REACT_APP_API}/${userId}/administration?page=${page}&size=${size}`
            
    let config={method: 'GET'}

    await fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    setData(response.content)
                })
            }
        })
        .then(response=>response)
        .catch(e=>toast.error(e))
}


export async function getWorkersLastPage(setLastPage, page){

    let size=5
    let ID=localStorage.getItem("ID")
    let userId=JSON.parse(ID)
    let URL=`${process.env.REACT_APP_API}/${userId}/administration?page=${page}&size=${size}`
            
    let config={method: 'GET'}

    await fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
               response.json().then(response=>{
                    if(response.last === false){
                        setLastPage(false)
                    }else{
                        setLastPage(true)
                    }
                })
            }
        })
        .catch(e=>toast.error(e))
}







