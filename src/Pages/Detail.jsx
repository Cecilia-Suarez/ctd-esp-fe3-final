import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import doctor from '../../public/images/doctor.jpg'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [character, setCharacter] = useState([])

  const { id } = useParams()
  console.log(id);

  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(url)
      .then(response => setCharacter(response.data))
  }, [])


  return (
    <>
      <div>
        <h1>Detail Dentist</h1>
        <img src={doctor} alt=""/>
        <h3>{character.name}</h3>
        <h4>{character.email}</h4>
        <h4>{character.phone}</h4>
        <h4>{character.website}</h4>
      </div>
    </>
  )
}

export default Detail