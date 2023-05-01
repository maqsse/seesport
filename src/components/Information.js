import React from 'react'
import PropTypes from 'prop-types'
import '../styles/accueil.css'
import '../styles/information.css'

/**
Represents a component to display information about a nutrient.
@param {Object} props - The props object.
@param {string} props.icone - The path to the icon image.
@param {number} props.nbGramme - The amount of the nutrient in grams or kilocalories.
@param {string} props.type - The type of the nutrient (e.g. "Calories", "Protein", "Fat").
@returns {JSX.Element} A JSX element that displays the nutrient information.
*/

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
