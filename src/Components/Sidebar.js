import relaxation from '../assets/relaxation.png'
import natation from '../assets/natation.png'
import cyclisme from '../assets/cyclisme.png'
import musculation from '../assets/musculation.png'

import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <nav className='Nav_sidebar'>
        <div className='side'><img src={relaxation} alt='relaxation' className='img_sidebar'/></div>
        <div className='side'><img src={natation} alt='natation' className='img_sidebar'/></div>
        <div className='side'><img src={cyclisme} alt='cyclisme' className='img_sidebar'/></div>
        <div className='side'><img src={musculation} alt='musculation' className='img_sidebar'/></div>
      </nav>
      <p> Copiryght, SportSee 2020 </p>
    </aside>
  )
}

export default Sidebar
