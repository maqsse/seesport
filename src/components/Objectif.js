import React from 'react'
import '../styles/objectif.css'
import { CustomTooltipObjectif } from './Custom'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'
import PropTypes from 'prop-types';

/**
 * Render a LineChart with user average sessions Data
 * @return {JSX}
 * @param  {bool} objectifUser
 * @param  {array} day
 * @param { number } sessionLength
 * 
 */

const Objectif = ({objectifUser}) => {
  
  
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
Objectif.propTypes = {
  objectifUser: PropTypes.array.isRequired,
  setObjectifUser: PropTypes.func.isRequired,
};

export default Objectif
