import React from 'react'
import PropTypes from 'prop-types'
import '../styles/accueil.css'
import '../styles/information.css'

const Information = ({ icone, nbGramme, type }) => {
  return (
    <div className='information'>
      <div className={`information--user--${type.toLowerCase()}`}>
        <img src={icone} alt={type} />
      </div>
      <div>
        {type === 'Calories' ? <p className='info-gramme'> {nbGramme}kCal </p> : <p className='info-gramme'> {nbGramme}g </p>}
        <p className='info-type'> {type} </p>
      </div>
    </div>
  )
}
Information.propTypes = {
  icone: PropTypes.string.isRequired,
  nbGramme: PropTypes.number,
  type: PropTypes.string.isRequired
}


export default Information
