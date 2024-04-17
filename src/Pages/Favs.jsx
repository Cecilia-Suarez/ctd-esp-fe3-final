import React from "react";
import Card from "../Components/Card";
import cardGridStyle from '../Styles/Card.module.css'
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favs} = useContextGlobal()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={cardGridStyle.cardGrid}>
        {favs.map(fav => <Card dentist={fav} key={fav.id}/>)}
      </div>
    </>
  );
};

export default Favs;
