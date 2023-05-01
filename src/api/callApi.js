const server = 'https://seesport.netlify.app/user/' + id
 
/**
 * Fetches key data for the current user
 * @returns {Promise} A promise that resolves with the key data for the current user
 */
export async function fetchInformation() {
  let response, data;
  try {
    response = await fetch(server);
    data = await response.json();
    return data.data.keyData;
  } catch (err) {
    console.log('----- Error -----', err);
  }
}
 
/**
 * Fetches user information for the current user
 * @returns {Promise} A promise that resolves with the user information for the current user
 */
export async function fetchInformationUserInfo() {
  let response, data;
  try {
    response = await fetch(server);
    data = await response.json();
    return data.data.userInfos;
  } catch (err) {
    console.log('----- Error -----', err);
  }
}

/**
 * Fetches score data for the current user
 * @returns {Promise} A promise that resolves with the score data for the current user
 */
export async function fetchInformationScore() {
  let response, data;
  try {
    response = await fetch(server);
    data = await response.json();
    return data;
  } catch (err) {
    console.log('----- Error -----', err);
  }
}
 
/**
 * Fetches activity data for the current user
 * @returns {Promise} A promise that resolves with the activity data for the current user
 */
export async function fetchActivity() {
  let response, data;
  try {
    response = await fetch(server + '/activity');
    data = await response.json();
    
        return data;


  } catch (err) {
    console.log('----- Error -----', err);
  }
}

/**
 * Fetches average session data for the current user
 * @returns {Promise} A promise that resolves with the average session data for the current user
 */
export async function fetchAverageSession() {
  let response, data;
  try {
    response = await fetch(server + '/average-sessions');
    data = await response.json();
    return data;
  } catch (err) {
    console.log('----- Error -----', err);
  }
}

/**
 * Fetches performance data for the current user
 * @returns {Promise} A promise that resolves with the performance data for the current user
 */
export async function fetchPerformance() {
  let response, data;
  try {
    response = await fetch(server + '/performance');
    data = await response.json();
    return data;
  } catch (err) {
    console.log('----- Error -----', err);
  }
}
