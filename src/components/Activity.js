import React from 'react'
import { fetchActivity } from '../api/Api'
import { CustomTooltipActivity } from './Custom'
import { useState, useEffect } from 'react'
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from 'recharts'
import '../styles/activity.css'

/**
 * Render a BarChart with user activity Data
 * @return {JSX}
 */


function Activity () {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetchActivityUser()
  }, [])

  /**
Fetches activity data and sets it in the state.
@returns  - A Promise that resolves when the data is set in the state.
*/
  
  async function fetchActivityUser () {
    const info = await fetchActivity()
    setActivity(info)
  } 
  
  /**
 * Formats activity data.
 * @param {Object} dataOriginal - The original data object.
 * @param {Array} dataOriginal.sessions - An array of activity sessions.
 * @returns {Array} - The formatted activity data.
 */
  
  return (
    <div className='activity'>
      <h3> Acitivité quotidienne </h3>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart width='50%' height='50%' data={activity}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='day' tickLine={false} axisLine={false} />
          <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />
          <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
          <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
          <Tooltip content={<CustomTooltipActivity />} />
          <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px' }} formatter={(value, entry, index) => <span className='text-color'>{value}</span>} />
          <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30' />
          <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7} yAxisId='calorie' fill='#E60000' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Activity
