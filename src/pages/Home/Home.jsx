import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
      <h1>Dojo Prime</h1>
      <p>ACADEMIA DE ARTES MARCIAIS </p>
      <p>🥊🥋Há 18 anos transformando vidas dentro e fora do tatame.</p>
      <img className='img' src="./src/assets/img/jiujitsu.jpg" alt="Mestre Heder Araujo" />
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15926.472287635634!2d-40.3617049!3d-3.6740832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eac6d3dcd24903%3A0x86b0e670029a50c3!2sDojo%20Prime!5e0!3m2!1spt-BR!2sbr!4v1715287935138!5m2!1spt-BR!2sbr"></iframe>
    </div>
    

  )
}

export default Home
