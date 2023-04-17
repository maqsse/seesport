import React, { useState, useEffect } from 'react'
import { fetchInformation, fetchInformationUserInfo } from '../api/Api'
import Upbar from '../components/Upbar'
import Sidebar from '../components/Sidebar'
import calorie from '../assets/calories.png'
import proteine from '../assets/proteine.png'
import glucide from '../assets/glucide.png'
import lipide from '../assets/lipide.png'
import Information from '../components/Information'
import Activity from '../components/Activity'
import Objectif from '../components/Objectif'
import Perfradar from '../components/Perfradar'
import Perfscore from '../components/Perfscore'
import Error from '../components/Error'
import '../styles/accueil.css'
import '../styles/upbar.css'
import '../styles/sidebar.css'

/**Render the dashboard
 * @return {JSX}
 */

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


  return connexionBdd ? (
    <div className="principal">
      <Upbar />
      <Sidebar />
      <div className="dashboard">
        <div className="welcome">
          <h1>
            {' '}
            Bonjour <span className="nom">
              {' '}
              {informationUser?.firstName}{' '}
            </span>{' '}
          </h1>
          <h2> Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
        </div>
        <div className="separate_stats">
          <div className="stats">
            <div className="activity_graph">
              <Activity />
            </div>

            <div className="graph-objectif">
              <Objectif />
              <Perfradar />
              <Perfscore />
            </div>
          </div>
          <div className="information-stat">
            <Information
              icone={calorie}
              nbGramme={information?.calorieCount}
              type="Calories"
            />
            <Information
              icone={proteine}
              nbGramme={information?.proteinCount}
              type="Proteines"
            />
            <Information
              icone={glucide}
              nbGramme={information?.carbohydrateCount}
              type="Glucides"
            />
            <Information
              icone={lipide}
              nbGramme={information?.lipidCount}
              type="Lipides"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Error />
  )
}

export default Accueil
