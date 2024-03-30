import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import doctor from '../../public/images/doctor.jpg'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {dentistDetail, dispatch, } = useContextGlobal()

  const {name, email, phone, website} = dentistDetail

  const { id } = useParams()
  console.log(id);

  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(url)
      .then(response => dispatch({type: 'GET_CHARACTER', payload: response.data}))
  }, [])

  return (
    <>
      <div>
        <h1>Detail Dentist</h1>
        <img src={doctor} alt=""/>
        <h3>{name}</h3>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <h4>{website}</h4>
      </div>
    </>
  )
}

export default Detail