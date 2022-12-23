import '../../App.css';

import './index.css'

import Header from '../../components/header'
import Footer from '../../components/footer';

import { Button, TextField } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import SendIcon from '@material-ui/icons/Send';

import Logo from '../../assets/SignUp.png' 
import Google from '../../assets/google.png'

import Store from '../../assets/get_apk.png'

import { useEffect, useState } from 'react';

import { signInWithEmailAndPass, signInWithProvider, verifyRoute } from '../../services'
import { auth } from '../../services/db'
import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider } from 'firebase/auth';

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
  
  
  function accessUsingGoogle(){
        let provider=new GoogleAuthProvider()
        signInWithProvider(auth, provider, providerNavigation)
  }

  return (
      <div className="Login">
        
        <header className='login-header'>
          <Header path="/signup" logo={Logo} />
          <Divider  style={{height:'1px', background: '#2976E6'}} />
        </header>
        
        <main className='login-main'>
            <Grid className='form-container' id='form-container' container>
            
            <div  id="email">
              <TextField  label="email"
                          id="field_email"
                          variant="filled"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            
            <div  id="password">
              <TextField  label="password"
                          id="field_password"
                          type={'password'}
                          variant="filled"    
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            
            <Button     type="submit"
                        variant="contained" 
                        size="large"
                        id="btn_send"
                        endIcon={<SendIcon  />}
                        onClick={login}
                > login
            </Button>

            <div className='text'>
                    <p>or</p>
                    <strong>Login with</strong>
            </div>

            <div className='socialLogin'>

               <img className='google' 
                    src={Google} 
                    alt='google icon' 
                    onClick={accessUsingGoogle}
                    /> 

           </div>                  
                
            </Grid>

            <div className='play-store' >
                <a  
                href='https://drive.google.com/drive/folders/1XpKr7JwtjR6C3-so_2ZYETvIsfRrMeSG' 
                target='blank'>
                        <img className='store' 
                                src={Store} 
                                alt='google icon' 
                                /> 
                </a>
                
           </div>  
        </main>


        <footer className='login-footer'>
          <Footer />
        </footer>

    </div>
  );
}

 
