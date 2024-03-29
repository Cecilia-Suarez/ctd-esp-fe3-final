import React from "react";
import { Link } from "react-router-dom";
import doctor from '../../public/images/doctor.jpg'
import cardStyle from '../Styles/Cards.module.css'


const Card = ({ dentist }) => { // DESESTRUCTURAR { name, username, id }

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div >
      <Link to={'/detail/' + dentist.id} className={cardStyle.card}>
        {/*<img src={doctor} alt="" />*/}
        <h4>{dentist.name}</h4>
        <h4>{dentist.username}</h4>
      </Link>


      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className={cardStyle.favButton}>⭐</button>
    </div>
  );
};

export default Card;
