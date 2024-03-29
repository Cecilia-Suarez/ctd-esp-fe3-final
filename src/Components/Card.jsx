import React from "react";
import { Link } from "react-router-dom";
import doctor from '../../public/images/doctor.jpg'
import cardStyle from '../Styles/Cards.module.css'


const Card = ({ dentist }) => { // DESESTRUCTURAR { name, username, id }

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className={cardStyle.card}>
      <Link to={'/detail/' + dentist.id} >
        {/*<img src={doctor} alt="" className={cardStyle.img}/>*/}
        <h4>{dentist.name}</h4>
        <h4>{dentist.username}</h4>
      </Link>


      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className={cardStyle.favButton}>⭐</button>
    </div>
  );
};

export default Card;
