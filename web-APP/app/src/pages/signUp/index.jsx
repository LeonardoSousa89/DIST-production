import '../../App.css';

import './index.css'

import Header from '../../components/header'
import Footer from '../../components/footer'

import { Button, TextField } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import SendIcon from '@material-ui/icons/Send';

import Logo from '../../assets/Login.png' 
import Google from '../../assets/google.png'

import Store from '../../assets/get_apk.png'

import { useEffect, useState } from 'react';

import { createUserWithProvider, signUp, verifyRoute } from '../../services'
import { auth } from '../../services/db'
import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider } from 'firebase/auth';


export default (props)=>{

  const [username, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  
  const navigate=useNavigate()

  useEffect(()=>{ verifyRoute() },[])

  useEffect(()=>{},[username,email,password])

  function navigation(){
      let URL=`/login`
      navigate(URL, {replace:true})
  }

  function createUser(){
    signUp(username, auth, email, password, navigation)
  }

  function providerNavigation(){
    let URL=`/login`
    navigate(URL, {replace:true})
  }

    function accessUsingGoogle(){
      let provider=new GoogleAuthProvider()
      createUserWithProvider(auth, provider, providerNavigation)
  }

  return (
    <div className="signUp">

        <header className='signUp-header'>
          <Header path="/login" logo={Logo} />
          <Divider  style={{height:'1px', background: '#2976E6'}} />
        </header>

        <main className='signUp-main'>
          <Grid className='form-container' id='form-container' container>
              
              <div id="name">
                <TextField  label="name"
                            variant="filled"
                            id="field_name"
                            value={username}
                            onChange={(e)=>setName(e.target.value)}
                  />
              </div>

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
                          onClick={createUser}
              > send
              </Button>

              <div className='text'>
                      <p>or</p>
                      <strong>SignUp with</strong>
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

        <footer className='signUp-footer'>
          <Footer />
        </footer>

    </div>
  );
}

 
