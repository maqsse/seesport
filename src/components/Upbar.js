import React from 'react'
import logo from '../assets/logo.png'


const Upbar = () => {
  return (
    <header>
       <nav className='nav_upbar'>
      <img src={logo} alt='logo' className='img_upbar'/>
        <span className='span_upbar'> Accueil </span>
        <span className='span_upbar'> Profil </span>
        <span className='span_upbar'> Réglage </span>
        <span className='communaute'> Communauté </span>
      </nav>
    
    </header>
  )
}

export default Upbar
