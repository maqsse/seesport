import { fetchInformationScore, fetchActivity, fetchPerformance, fetchAverageSession} from "../api/callApi";
import { formatScore, formatActivityData, formatSessionDays, formatPerformanceData } from "./format";

 
/**
   * Fetches the user's score information.
   * @async
   * @function
   */
export async function fetchScoreUser() {
  const info = await fetchInformationScore();
  const dataFormated = formatScore(info);
  return dataFormated;
}

/**
Fetches activity data and sets it in the state.
@returns  - A Promise that resolves when the data is set in the state.
*/

export async function fetchActivityUser(setActivity) {
  const info = await fetchActivity()
  const formatedData = formatActivityData(info.data)
  setActivity(formatedData)
}

/**

Fetches performance data and sets it in the state.
@param {function} setPerformance - A function to update the state with the formatted performance data.
@returns {Promise<void>} A Promise that resolves when the data is set in the state.
*/

export async function fetchPerformanceUser(setPerformance) {
  const data = await fetchPerformance()
  const dataformated = formatPerformanceData(data.data)
  setPerformance(dataformated);
}
/**
 * Fetches the average session duration for the user from an API.
 * @async
 * @function
 *
 * @return {Object[]}
 */

export async function fetchObjectifUser() {
  const info = await fetchAverageSession()
  const formateddata = formatSessionDays(info.data)
  return(formateddata)
}



