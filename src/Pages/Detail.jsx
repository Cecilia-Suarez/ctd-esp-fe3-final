import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import doctor from '../../public/images/doctor.jpg'
import { useContextGlobal } from '../Components/utils/global.context'
import detailStyle from '../Styles/Detail.module.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { dentistDetail, dispatch, } = useContextGlobal()

  const { name, email, phone, website, username } = dentistDetail

  const { id } = useParams()
  console.log(id);

  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(url)
      .then(response => dispatch({ type: 'GET_CHARACTER', payload: response.data }))
  }, [])

  return (
    <>
      <div >
        <h1>Detail Dentist</h1>
        <div className={detailStyle.containerDetail}>
          <img src={doctor} alt="" />
          <div className={detailStyle.containerText}>
            <h2>{name} {username}</h2>
            <h4>✉ {email}</h4>
            <h4>☎ {phone}</h4>
            <h4>🌐{website}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail