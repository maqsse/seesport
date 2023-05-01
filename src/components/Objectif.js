import React from 'react'
import '../styles/objectif.css'
import { fetchAverageSession } from '../api/callApi'
import { CustomTooltipObjectif } from './Custom'
import { useState, useEffect } from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'


/**
 * Render a LineChart with user average sessions Data
 * @return {JSX}
 * @param  {bool} objectifUser
 * @param  {array} day
 * @param { number } sessionLength
 * 
 */

const Objectif = () => {
  const [objectifUser, setObjectifUser] = useState([])

  useEffect(() => {
    fetchObjectifUser()
  }, []) 

  /**
   * Fetches the average session duration for the user from an API.
   * @async
   * @function
   *
  * @return {JSX}
 */
  
  async function fetchObjectifUser () {
    const info = await fetchAverageSession()
    const formateddata = formatSessionDays(info.data)
    setObjectifUser(formateddata)
  }
  
  /**
 * Formats session days.
 * @param {Object} dataOriginal - The original data object.
 * @param {Array} dataOriginal.sessions - An array of session days.
 * @returns {Array} - The formatted session days.
 */
 
  const jour = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D'
}

 function formatSessionDays (dataOriginal) {
  const { sessions } = dataOriginal
  const newData = []
  sessions.forEach(sess => {
    newData.push({
      day: jour[sess.day],
      sessionLength: sess.sessionLength
    })
  })
  return newData
} 
  
  return (
    <div className='objectif'>
      <h3 className='h3_objectif'> Durée moyenne des sessions </h3>
      <ResponsiveContainer width='100%' height='100%' className='objectif-responsive'>
        <LineChart
          className='objectif-line'
          width='50%' height='50%' data={objectifUser} 
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          onMouseMove={(e) => {
            const div = document.getElementsByClassName('objectif-responsive')[0]
            if (e.isTooltipActive) {
              const windowWidth = div.clientWidth
              const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
            }
          }}
        > 
          <XAxis dataKey='day' stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false}  />
          <YAxis padding={{ top: 50 }} stroke='#FFFFFF' opacity={0.5} tickLine={false}  axisLine={false} hide />
          <Tooltip content={<CustomTooltipObjectif />} />
          <Legend />
          <Line type='monotone' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2} legendType='none' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Objectif
