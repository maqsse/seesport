import React from 'react'
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types';
import '../styles/perfradar.css'

/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 * @param  {array} performance
 */

const Perfradar = ({performance}) => {
      
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

Perfradar.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      kind: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Perfradar
