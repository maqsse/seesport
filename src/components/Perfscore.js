import React from 'react'
import { CustomLegendScore } from './Custom'
import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types';
import '../styles/perfscore.css'

/**
 * Represents a performance score component.
 * 
 * @function
 * @returns {JSX.Element} The JSX code representing the component.
 * @param  {array} scoreUser
  */


const Perfscore = ({scoreUser}) => {
 
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

Perfscore.propTypes = {
  scoreUser: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.string.isRequired,
      todayScore: PropTypes.number.isRequired,
      fill: PropTypes.string,
    })
  ).isRequired,
};

export default Perfscore
