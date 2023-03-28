import React, { useState, useEffect } from 'react'
import { fetchInformation, fetchInformationUserInfo } from '../api/Api'
import '../styles/accueil.css'
import '../styles/upbar.css'
import '../styles/sidebar.css'
import Upbar from '../components/Upbar'
import Sidebar from '../components/Sidebar'
import Activity from '../components/Activity'
import Objectif from '../components/Objectif'
import Perfradar from '../components/Perfradar'
import Perfscore from '../components/Perfscore'
import Erreur from '../page/Erreur'



function Accueil() {
  const [information, setInformation] = useState([])
  const [informationUser, setInformationUser] = useState([])
  let connexionBdd = false


  useEffect(() => {
    fetchInformationUser()
  }, [connexionBdd])

  async function fetchInformationUser () {
    const info = await fetchInformation()
    setInformation(info)
    const infoUser = await fetchInformationUserInfo()
    setInformationUser(infoUser)
  }

  if (informationUser?.firstName !== undefined) {
    connexionBdd = true
  } else {
    connexionBdd = false
  }


  return (
    connexionBdd
      ? (
    <div>
      <Upbar />
      <Sidebar />

      <div className="dashboard">
        <div className="welcome">
        <h1> Bonjour <span className='nom'> {informationUser?.firstName} </span> </h1>
          <h2> Félicitations ! Vous avez explosé vos objectifs hier 👏 </h2>
      </div>
            <div className="separate_stats">
        <div className="stats">
          <div className="activity_graph">
            <Activity />
          </div> 
          <div className='graph-objectif'>
                <Objectif />  
                <Perfradar />
                <Perfscore/>
                </div>  
                
        </div>
        
      </div>
      
    </div>
    </div>
  )
  : (<Erreur />)
  )
}

export default Accueil
