import React from 'react'
import { fetchPerformance } from '../api/callApi'
import { useState, useEffect } from 'react'
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import '../styles/perfradar.css'

/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 * @param  {array} performance
 */

const Perfradar = () => {
  const [performance, setPerformance] = useState([])

  useEffect(() => {
    fetchPerformanceUser()
  }, [])

  /**
Fetches performance data and sets it in the state.
*/
  
  async function fetchPerformanceUser () {
    const data = await fetchPerformance()
    const dataformated = formatPerformanceData(data.data)
    setPerformance(dataformated)
  }
  
                                        
  /**
 * Formats performance data.
 * @param {Object} dataOriginal - The original data object.
 * @param {Array} dataOriginal.data - An array of performance data.
 * @param {Array} dataOriginal.kind - An array of performance kinds.
 * @returns {Array} - The formatted performance data.
 */     
 
     const translation = {
  cardio: 'Cardio',
  energy: 'Energie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité'
} 

function formatPerformanceData (dataOriginal) {
  const { data, kind } = dataOriginal
  const newData = []
  data.forEach(perf => {
    newData.push({
      value: perf.value,
      kind: translation[kind[perf.kind]]
    })
  })
  return newData
}                                   
// Renders an empty component if performance data has not been fetched yet.
if (performance.length === 0) return (<></>)
  return (
    <div className='radar'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart outerRadius={70} width='50%' height='50%' data={performance}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' stroke='#FFFFFF' fontSize={16} tickLine={false} />
          <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
          <Legend />
        </RadarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Perfradar
