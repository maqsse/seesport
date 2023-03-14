import React from 'react'
import logo from '../logo.svg'


const Header = () => {
  return (
    <div>
      
      <nav>
        <img src={logo} alt='logo' />
        <span> Accueil </span>
        <span> Profil </span>
        <span> Réglage </span>
        <span className='communaute'> Communauté </span>
      </nav>
    
    </div>
  )
}

export default Header
