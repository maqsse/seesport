import '../styles/custom.css' 
import PropTypes from 'prop-types';

  
/** create a custom tooltype for the user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
 */

export const CustomTooltipActivity = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip-activity'>
        <p> {`${payload[0].value}kg`}</p>
        <p> {`${payload[1].value}kCal`}</p>
      </div>
    )
  }
  return null
}

export const CustomTooltipObjectif = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip-objectif'>
        <p> {`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}

export function CustomLegendScore (payload) {
  return (
    <div className='custom-legend-score'>
      <p className='custom-legend-score-score'>
        {payload?.payload[0]?.payload.todayScore}%
      </p>
      <p className='custom-legend-score-objectif'> de votre objectif</p>
    </div>
  )
}

CustomTooltipActivity.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};