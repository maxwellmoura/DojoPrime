import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div>
      
      <footer className='footer'>
        <h3>Acesse todas as nossas redes sociais</h3>
        <div className='img_footer'>
          <a href="https://www.instagram.com/dojoprime/" target="_blank" rel="noopener noreferrer">
            <img src="./img/instagram.png" alt="Instagram" />

          </a>
          <a href="https://www.facebook.com/dojoprime" target="_blank" rel="noopener noreferrer">
            <img src="./img/facebook.png" alt="Facebook" />

          </a>
          <a href="wa.me/5588996062721" target="_blank" rel="noopener noreferrer">
            <img src="./img/whatsapp.png" alt="WhatsApp" />

          </a>
        </div>
        <p>Dojo Prime &copy; 2006</p>
      </footer>
    </div>
  )
}

export default Footer
