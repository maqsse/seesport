import React from 'react'
import Upbar from '../components/Upbar'
import Sidebar from '../components/Sidebar'
import { Link } from "react-router-dom";
import '../styles/upbar.css'
import '../styles/sidebar.css'
import '../styles/error.css'

const Erreur = () => {
  return (
    <div>
      <div>
      <Upbar/>
    <article className='error'>
      <h1> 402 </h1>
      <h2> Oups! La page que vous demandez n'existe pas </h2>
      <Link to="/user/12">Retour à la page d'accueil</Link>
      <Sidebar/>
    </article>
    </div>
    </div>
  )
}

export default Erreur
