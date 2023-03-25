import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({
  name,
  dishSummary,
  healthScore,
  stepByStep,
  image,
  diets,
  id,
  detail,
}) => {
  return (
    <div className="Card">
      <img src={image} alt="img not found" className="imagen-card-home" />
      <span className="name-title-card">{name}</span>
      <h4 className="healthscore-card">{healthScore}</h4>
      <p className="dietas-card">{diets}</p>
      <Link to={`/Home/${id}`}>
        <button className="button-detail">{detail}</button>
      </Link>
    </div>
  );
};
export default Card;
