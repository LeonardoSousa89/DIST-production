import '../../App.css';

import './index.css'

import Header from '../../components/header'

import { Button, TextField } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import SendIcon from '@material-ui/icons/Send';

import Logo from '../../assets/SignUp.png' 
import Google from '../../assets/google.png'
import Facebook from '../../assets/facebook.png'

import Store from '../../assets/google-play.png'

import { useEffect, useState } from 'react';

import { signInWithEmailAndPass, signInWithProvider, verifyRoute } from '../../services'
import { auth } from '../../services/db'
import { useNavigate } from 'react-router-dom';

import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export default (props)=>{
  
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  
  const navigate=useNavigate()

  useEffect(()=>{ verifyRoute() },[])

  useEffect(()=>{},[email,password])

  function navigation(id){
        let URL=`/dist/${id}/administration`
        navigate(URL, {replace:true})
  }

  function login(){
        
        signInWithEmailAndPass(auth, email, password, navigation)
        
  }
  
  
    function providerNavigation(id){
      let URL=`/dist/${id}/administration`
      navigate(URL, {replace:true})
    }
  
    function accessUsingFacebook(){
        let provider=new FacebookAuthProvider()
        signInWithProvider(auth, provider, providerNavigation)
    }
  
      function accessUsingGoogle(){
        let provider=new GoogleAuthProvider()
        signInWithProvider(auth, provider, providerNavigation)
    }

  return (
      <div className="Login">
        <Header path="/signup" logo={Logo} />
        
        <Divider  style={{height:'1px', background: '#2976E6'}} />
        
             <Grid className='form-container' id='form-container' container>
            
            <TextField  label="email"
                        id="email"
                        variant="filled"
                        className='size'
                        style={{marginTop:'80px'}}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
            
            <TextField  label="password"
                        id="password"
                        type={'password'}
                        variant="filled"    
                        className='size'
                        style={{marginTop:'10px'}}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
            
            <Button     type="submit"
                        variant="contained" 
                        size="large"
                        className='size'
                        style={{    
                                fontWeight:'bold', 
                                background:'#2976E6',
                                marginTop:'10px'
                            }}
                        endIcon={<SendIcon  />}
                        onClick={login}
                > login
            </Button>

            <div className='text'>
                    <p>or</p>
                    <strong>Login with</strong>
            </div>

            <div className='socialLogin'>
               <img className='facebook' 
                    src={Facebook}      
                    alt='facebook icon'
                    onClick={accessUsingFacebook}
                    /> 

               <img className='google' 
                    src={Google} 
                    alt='google icon' 
                    onClick={accessUsingGoogle}
                    /> 
           </div>                  
                
            </Grid>

            <div className='play-store' >
                <a  
                href='https://play.google.com/store/games?hl=pt_BR&gl=US' 
                target='blank'>
                        <img className='store' 
                                src={Store} 
                                alt='google icon' 
                                /> 
                </a>
                
           </div>  

    </div>
  );
}

 
