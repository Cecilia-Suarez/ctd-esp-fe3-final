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

  const addOrRemoveFav = () => {
    if (findFav){
      dispatch({ type: 'DELETE_FAV', payload: dentist.id });
      console.log({id} + 'Removido');
    } else {
      dispatch({type: 'ADD_FAV', payload: dentist})
      console.log({id} + 'Agregado');
    }
  }

  return (
    <div className={cardStyle.card}>
      <Link to={'/detail/' + id} >
        {/*<img src={doctor} alt="" className={cardStyle.img}/>*/}
        <h4>{name}</h4>
        <h4>{username}</h4>
      </Link>
      <button onClick={addOrRemoveFav} className={cardStyle.favButton}>{findFav ? '❤️' : '🤍'}</button>
    </div>
  );
};

export default Card;
