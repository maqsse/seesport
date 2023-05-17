/**
 * Formats activity data.
 * @param {Object} dataOriginal - The original data object.
 * @param {Array} dataOriginal.sessions - An array of activity sessions.
 * @returns {Array} - The formatted activity data.
 */

export function formatActivityData (dataOriginal) {
  const { sessions } = dataOriginal
  const newData = []
  let date
  sessions.forEach(sess => {
    date = new Date(sess.day)
    newData.push({
      day: date.getDate(),
      kilogram: sess.kilogram,
      calories: sess.calories
    })
  })
    return newData
  }

  /**
 * Formats session days.
 * @param {Object} dataOriginal - The original data object.
 * @param {Array} dataOriginal.sessions - An array of session days.
 * @returns {Array} - The formatted session days.
 */

const jour = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D'
}

 export function formatSessionDays (dataOriginal) {
  const { sessions } = dataOriginal
  const newData = []
  sessions.forEach(sess => {
    newData.push({
      day: jour[sess.day],
      sessionLength: sess.sessionLength
    })
  })
  return newData
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

export function formatPerformanceData (dataOriginal) {
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

/**
 * Formats score data.
 * @param {Object} dataOriginal - The original data object.
 * @param {Object} dataOriginal.data - The score data.
 * @param {string} [dataOriginal.data.todayScore] - The score for today.
 * @param {string} [dataOriginal.data.score] - The overall score.
 * @param {string} dataOriginal.data.userId - The user ID.
 * @returns {Array} - The formatted score data.
 */

export function formatScore (dataOriginal) {
  const { data } = dataOriginal
  let score
  if (data.todayScore === undefined) {
    score = data.score
  } else {
    score = data.todayScore
  }
  const newData = []
  newData.push({
    id: data.id,
    todayScore: score * 100
  })
  newData.push({
    id: data.id,
    todayScore: 100,
    fill: '#ffffff00'
  })
  return newData
}

 
