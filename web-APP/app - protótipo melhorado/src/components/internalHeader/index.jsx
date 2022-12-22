import '../../App.css';
import '../../pages/admin/index.css'

import Logo from '../../assets/dist-icon.png'
import Logo_text from '../../assets/DIST.png'
import camera from '../../assets/camera.png'

export default (props)=>{ 
  

  return (
    <div className="internalHeader">

      <div className='logoContainer'>
        <img className='logoIcon' src={Logo} alt='dist logo'/>
        <img className='logoText' src={Logo_text} alt='dist logo text'/>
      </div>

      <div className='profileContainer'>

        <div className='profilePhotoContainer'>
          {
            !props.profilePhoto ? 
            (
              <img className='clientPhoto' src={camera} alt='profile photo'/>
            ) : 
            (
              <img className='clientPhoto' src={props.profilePhoto} alt='profile photo'/>
            ) 
          }
        </div>

        <div className='profileInfoContainer'>
          <h1 id='profileName' >{props.profileName}</h1> 
          <h4 id='profileEmail' >{props.profileEmail}</h4> 
        </div>

      </div>

    </div>
  );
}

 
