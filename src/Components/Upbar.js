import React from 'react'
import logo from '../assets/logo.png'


const Upbar = () => {
  return (
    <header>
       <nav className='nav_upbar'>
      <img src={logo} alt='logo' className='img_upbar'/>
        <span> Accueil </span>
        <span> Profil </span>
        <span> Réglage </span>
        <span className='communaute'> Communauté </span>
      </nav>
    
    </header>
  )
}

export default Upbar
