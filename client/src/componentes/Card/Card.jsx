import './Card.css'
import {Link} from 'react-router-dom'
const Card = ({name,dishSummary,healthScore,stepByStep,image, diets,id, detail  }) => {
  return (
    <div className="Card">
      <h3 className='name-title' >{name}</h3>
      <img src={image} alt = "img not found"  className='img' />
      <h4 className='healthscore'  > HealthScore: {healthScore}</h4>
      <p className='dietas'>Dietas: {diets}</p>
      <Link to={`/Home/${id}`} >
      <button className='button-detail' >{detail}</button>
      </Link>
    </div>
  )
}
export default Card



          {/* {
          diets.map((el) => (
            <p key={el.name}>{el.name}</p>
          ))} */}