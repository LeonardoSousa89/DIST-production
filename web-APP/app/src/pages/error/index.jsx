import '../../App.css'

import { Link } from 'react-router-dom'

export default function Erro(){
  return (
    <div className="error">
       <h1>Error 404</h1>
       <h5>Page not found. ;)</h5>

       <Link to={'/login'}>
          <p id="click">return the login page here.</p>
        </Link>
    </div>
    );
}

