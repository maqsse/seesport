import React from 'react'
import { fetchInformationScore } from '../api/callApi'
import { CustomLegendScore } from './Custom'
import { useState, useEffect } from 'react'
import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from 'recharts'
import '../styles/perfscore.css'

/**
 * Represents a performance score component.
 * 
 * @function
 * @returns {JSX.Element} The JSX code representing the component.
 * @param  {array} scoreUser
  */


const Perfscore = () => {
  const [scoreUser, setScoreUser] = useState([])

  useEffect(() => {
    fetchScoreUser()
  })
  
  /**
   * Fetches the user's score information.
   * @async
   * @function
   */

  async function fetchScoreUser () {
    const info = await fetchInformationScore()
    const dataFormated = formatScore(info)
    setScoreUser(dataFormated)
  }

/**
 * Formats score data.
 * @param {Object} dataOriginal - The original data object.
 * @param {Object} dataOriginal.data - The score data.
 * @param {string} [dataOriginal.data.todayScore] - The score for today.
 * @param {string} [dataOriginal.data.score] - The overall score.
 * @param {string} dataOriginal.data.userId - The user ID.
 * @returns {Array} - The formatted score data.
 */
 
 function formatScore (dataOriginal) {
  const { data } = dataOriginal
  let score
  if (data.todayScore === undefined) {
    score = data.score
  } else {
    score = data.todayScore
  }
  const newData = []
  newData.push({
    userId: data.userId,
    todayScore: score * 100
  })
  newData.push({
    userId: data.userId,
    todayScore: 100,
    fill: '#ffffff00'
  })
  return newData
}

  return (
        <div className='score_wrap'>
      <h3 className='perfscore_h3'> Score </h3>
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart startAngle={140} endAngle={500} cx='50%' cy='50%' innerRadius={70} barSize={10} outerRadius={120} data={scoreUser}>
          <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000' />
          <Legend content={<CustomLegendScore />} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Perfscore
