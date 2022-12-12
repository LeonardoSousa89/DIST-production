import { LogBox } from 'react-native'

import { auth, storage } from './db'

import { API_URL } from '../../.env.json'

import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword, 
         signOut } from 'firebase/auth'

import { ref, 
         uploadBytesResumable, 
         getDownloadURL } from 'firebase/storage';


export async function signUp(username, auth, email, password, props){

    await createUserWithEmailAndPassword(auth, email.trim(), password.trim())
        .then(response=>{

            //spring API creation user
            let URL=`${API_URL}/user-account/administration`

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
                    props.navigation.navigate("login")

                    alert("Account successfully created")

            })

        }).catch((e)=>{
            switch (e.code){
                case 'auth/email-already-in-use':
                    alert('Email already exist')
                break 
                case 'auth/missing-email':
                    alert("Email field can't be empty")
                break 
                case 'auth/invalid-email':
                    alert("Invalid email")
                break 
                case 'auth/weak-password':
                    alert("Password minimun 6 characters")
                break 
                case 'auth/internal-error':
                    alert("Password field can't be empty")
                break 
            }
        })
}


export async function signInWithEmailAndPass(auth, email, password, props){
    await signInWithEmailAndPassword(auth, email.trim(), password.trim())
        .then(()=>{
            
            props.navigation.navigate("admin")
            
            alert("Change your profile photo here")

        }).catch((e)=>{
            
            switch (e.code){
                case 'auth/user-not-found':
                    alert('User not found')
                break
                case 'auth/wrong-password':
                    alert('Incorrect password')
                break
                case 'auth/invalid-email':
                    alert("Email field can't be empty")
                break
                case 'auth/internal-error':
                    alert("password field can't be empty")
                break
            }
        })
}


export async function logOut(auth, props){
    await signOut(auth)
        .then(_=>{
            props.navigation.navigate("login")
        })
        .catch(e=>{
            alert('ERROR:' + e)
        })
}


export async function insertWorker(workerName,
                                   workerEmail,
                                   workerPost,
                                   workerAddress,
                                   workerPhoneNumber,
                                   workerAge,
                                   userId,
                                   navigate){


    let URL=`${API_URL}/administration`

    const data={workerName,
                workerEmail,
                workerPost,
                workerAddress,
                workerPhoneNumber,
                workerAge,
                admin:{userId}}  
                
    let config={ method: 'POST', 
                body: JSON.stringify(data),
                headers:{
                    'Content-type':'application/json'
                }
            }
                
    await fetch(URL, config).then(response=>{
        if(response.status === 201){
            response.json()
            alert('worker created')
            navigate()
           
        }
        if(response.status === 400){
            alert('Was an error, verify if some field is empty or perhaps your email already exists')
        }
        if(response.status === 500 || 
           response.status === 503 || 
           response.status === 504){
            alert("There's an error with server")
        }
        }).catch(e=> console.log(e))
}


export async function getProfileData(setUsername, setUserEmail){
    
    let userId=auth.currentUser.uid
    let URL=`${API_URL}/user-account/${userId}/administration`
    
    let config={method: 'GET'}

    await fetch(URL, config)
        .then(response=>{
            if(response.status === 200){
                response.json().then(response=>{
                    setUsername(response.userName.substring(0, 15))
                    setUserEmail(response.email.substring(0, 22))
                })
            }
            if(response.status === 404){
                alert('Resource not found')
            }
            if(response.status === 500 || 
               response.status === 503 || 
               response.status === 504){
                alert("There's an error with server")
            }
        })
        .then(response=>response)
        .catch(e=>alert(e))
}


export async function getWorkersData(setData, page){

    let userId=auth.currentUser.uid
    let URL=`${API_URL}/${userId}/administration?page=${page}`
            
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
        .catch(e=>alert(e))
}


export async function pagination(setData, page){

    let userId=auth.currentUser.uid
    let URL=`${API_URL}/${userId}/administration?page=${page}`
            
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
        .catch(e=>alert(e))
}


export async function uploadProfilePhoto(auth ,storage, setImage, ImagePicker){
    
    (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
                alert('Please, you need got permission to continue');
                return
            }
         else{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
        
            if(!result.cancelled){  

              const userId=auth.currentUser.uid
              const storageRef=ref(storage, `/userProfilePhoto/${userId}/userProfile`)
                  
              //convert image to array of bytes
              const img = await fetch(result.uri);
              const bytes = await img.blob()
        
              const uploadPhoto=uploadBytesResumable(storageRef, bytes)

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
         }
        }
      })()
}


export async function getProfilePhotoUploaded(userId, setImage){
    
    const reference=ref(storage, `/userProfilePhoto/${userId}/userProfile`)

    await getDownloadURL(reference).then(response=>{
      setImage(response)
    })
}


export async function getWorkersLastPage(setLastPage, page){

    const userId=auth.currentUser.uid
    let URL=`${API_URL}/${userId}/administration?page=${page}`
            
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
        .catch(e=>alert(e))
}


function ignoreAlert(){
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
}
ignoreAlert()


  








