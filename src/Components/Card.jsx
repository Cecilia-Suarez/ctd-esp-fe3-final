import React from "react";
import { Link } from "react-router-dom";
import doctor from '../../public/images/doctor.jpg'
import cardStyle from '../Styles/Cards.module.css'
import { useContextGlobal } from "./utils/global.context";



const Card = ({ dentist }) => {

  const {name, username, id} = dentist
  const {dispatch, favs} = useContextGlobal()

  const findFav = favs.find((fav => fav.id == dentist.id))
  console.log(findFav);

  const addFav = () => {
    if (findFav){
      alert('Este personaje ya está agregado a favoritos.')
    } else {
      dispatch({type: 'ADD_FAV', payload: dentist})
    }
  }

  

  return (
    <div className={cardStyle.card}>
      <Link to={'/detail/' + id} >
        {/*<img src={doctor} alt="" className={cardStyle.img}/>*/}
        <h4>{name}</h4>
        <h4>{username}</h4>
      </Link>


      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className={cardStyle.favButton}>{findFav ? '🌟' : '⭐'}</button>
    </div>
  );
};

export default Card;
