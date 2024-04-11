import React from 'react'
import Form from '../Components/Form'
import contactStyle from '../Styles/Contact.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className={contactStyle.container}>
      <h1>Contact</h1>
      <h3>Want to know more?</h3>
      <p>Send us your query and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact