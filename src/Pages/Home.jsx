import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import cardGridStyle from '../Styles/Cards.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { list } = useContextGlobal()

  return (
      //<h1>Home</h1>
      <div className={cardGridStyle.cardGrid}>
        {list.map(dentist => <Card  dentist={dentist} key={dentist.id}/>)}
      </div>
  )
}

export default Home