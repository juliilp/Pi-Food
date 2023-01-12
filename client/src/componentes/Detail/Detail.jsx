import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import {getDetails }from '../../redux/actions'
import {Link} from 'react-router-dom'
import s from './Detail_modules.css'

const Detail = (props) => {
const {id} = useParams()
  const dispatch = useDispatch()
  const data = useSelector((state) => state.detail)
  useEffect(() => {
    dispatch(getDetails(id))
  },[dispatch])

  return (
    <div className='container_details' >
      {
        data.map((e) => (
          
            <div className='card_detail'>
              <h2 className='detail_titulo' >{e.name}</h2>
              <img src={e.image} alt='imagen not found' />
              <p className='hs' >Health Score:  {e.healthScore}</p>
              <h3>Resumen de Plato:</h3>
              <p className='resumen'>{e.dishSummary.replace(/<[^>]*>?/g,'')}</p>  
              <h3>Dietas:</h3>
              {e.diets.map((e) => <span>{e.name},  </span>)}
              
              <Link to='/home'><button>Ir al HOME</button></Link>
              
              </div>
              
        ))
      }
    </div>
    
  )
}

export default Detail