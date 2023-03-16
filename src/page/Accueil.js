import React from 'react'
import Upbar from '../components/Upbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import '../styles/upbar.css'
import '../styles/sidebar.css'
import '../styles/welcome.css'


function Accueil() {
  return (
    <div>
      <Upbar/>
      <Header/>
      <Sidebar/>
      
    </div>
  )
}

export default Accueil
