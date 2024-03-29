import React from 'react'
import { Link } from 'react-router-dom'
import navStyle from '../Styles/Navbar.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav >
      {/*<Link to='/home' style={{justifyContent: 'flex-start'}}><h1>DH Odonto</h1></Link>*/}
      <Link to='/'><h4>Home</h4></Link>
      <Link to='/favs'><h4>Favs</h4></Link>
      <Link to='/contact'><h4>Contact</h4></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar