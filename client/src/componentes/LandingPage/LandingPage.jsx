import {Link} from 'react-router-dom'
import style from './LandingPage.css'
const LandingPage = () => {
  return (

    <div className='container__landing'>
    <div className='landing'>
      
      <p className='header title'> PROYECTO INDIVIDUAL FOOD</p>
      <p className='header name' >Julian Lopez Padua</p>
      <Link to='/home'> <button  className='home button' >Ir a HOME</button>   </Link>
      </div>
    </div>
  )
}

export default LandingPage