import '../../App.css';

import Logo from '../../assets/dist-icon.png'
import DIST from '../../assets/DIST.png'
import Git from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
 
import { Link } from 'react-router-dom'

export default (props)=>{

  return (
    <div className="Header">
        <div className='container-logo'>
            <img className='logo' src={Logo} alt='logo' />
        </div>

        <div className='container-dist'>
            <img className='logo-dist' src={DIST} alt='dist ' />
        </div>

        <div className='sub-container-logo'>
            <div className='internal-sub-container-logo'>
                <div className='social'>
                    <a href='https://github.com/LeonardoSousa89' target='blank'>
                        <img className='git' src={Git} alt='git-logo' />
                    </a>

                    <a href='https://linkedin.com/in/leonardo-dos-santos-sousa-238651173' target='blank'>
                        <img className='in' src={Linkedin} alt='IN-logo' />
                    </a>
                </div>


                <div className='text-logo-container'>
                            <Link to={props.path}>

                                <img  className='text-logo' 
                                      src={props.logo} alt='text-logo' />
                            </Link>
                </div>

            </div>
        </div>
    </div>
  );
}

 
