import React from 'react'
import { CustomTooltipActivity } from './Custom'
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from 'recharts'
import '../styles/activity.css'
import PropTypes from 'prop-types';

/**
 * Render a BarChart with user activity Data
 * @return {JSX} The activity component
 * @param  {array} activity
  */


function Activity ({activity}) {
      
  
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

Activity.propTypes = {
  activity: PropTypes.array.isRequired,
};

export default Activity
