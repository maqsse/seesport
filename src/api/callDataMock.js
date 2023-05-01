import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './data'


const [lienSite, search] = window.location.href.split('?')
const id = parseInt(lienSite.split('/')[4]) || 12
const mocked = search === 'mocked'



/**
 * Fetches key data for the current user
 * @returns {Promise} A promise that resolves with the key data for the current user
 */
export async function fetchInformation () {
  if (mocked) {
    const data = USER_MAIN_DATA.find(user => user.userId === id)
    return data.keyData
  }
}
 
/**
 * Fetches user information for the current user
 * @returns {Promise} A promise that resolves with the user information for the current user
 */
export async function fetchInformationUserInfo () {
  if (mocked) {
    const data = USER_MAIN_DATA.find(user => user.userId === id)
    return data.userInfos
  }
}

/**
 * Fetches score data for the current user
 * @returns {Promise} A promise that resolves with the score data for the current user
 */
export async function fetchInformationScore () {
  if (mocked) {
    const data = USER_MAIN_DATA.find(user => user.userId === id)
     return data
  }
} 
 
/**
 * Fetches activity data for the current user
 * @returns {Promise} A promise that resolves with the activity data for the current user
 */
export async function fetchActivity () {
  if (mocked) {
    const data = USER_ACTIVITY.find(user => user.userId === id)
    return data
  }
}

/**
 * Fetches average session data for the current user
 * @returns {Promise} A promise that resolves with the average session data for the current user
 */
export async function fetchAverageSession () {
  if (mocked) {
    const data = USER_AVERAGE_SESSIONS(user => user.userId === id)
    return data
  }
}

/**
 * Fetches performance data for the current user
 * @returns {Promise} A promise that resolves with the performance data for the current user
 */
export async function fetchPerformance () {
  if (mocked) {
    const data = USER_PERFORMANCE.find(user => user.userId === id)
    return data
  }
}
