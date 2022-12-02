import '../../App.css';

import Copy from '../../assets/copyright.png'
import Reserved from '../../assets/reserved.png'

export default (props)=>{
  return (
    <div className="Footer">
     <img className='Ccopy' src={Copy} alt='copy' />
     <img src={Reserved} alt='copy'/>
    </div>
  );
}

 
