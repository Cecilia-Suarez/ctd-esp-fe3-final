import React from 'react'
import dhLogo from '../../public/images/DH.png'
import facebookLogo from '../../public/images/ico-facebook.png'
import instagramLogo from '../../public/images/ico-instagram.png'
import tikTokLogo from '../../public/images/ico-tiktok.png'
import whatsappLogo from '../../public/images/ico-whatsapp.png'
import footerStyle from '../Styles/Footer.module.css'


const Footer = () => {
  //REVISAR SI LOS LINK IRIAN CON LINK O CON A 
  return (
    <footer className={footerStyle}>
      
      <p>Powered by Cecilia Suárez</p>

      <img src={dhLogo} alt="dh-logo" />

      <div className={footerStyle.socialIcon}>
        <img src={facebookLogo} alt="facebook-logo" />
        <img src={instagramLogo} alt="instagram-logo" />
        <img src={tikTokLogo} alt="tiktok-logo" />
        <img src={whatsappLogo} alt="whatsapp-logo" />
      </div>

    </footer>
  )
}

export default Footer
