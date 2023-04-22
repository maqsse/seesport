import React from 'react'
import { fetchInformationScore } from '../api/Api'
import { CustomLegendScore } from './Custom'
import { useState, useEffect } from 'react'
import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from 'recharts'
import '../styles/perfscore.css'




const Perfscore = () => {
  const [scoreUser, setScoreUser] = useState([])

  useEffect(() => {
    fetchScoreUser()
  }, [])

  async function fetchScoreUser () {
    const info = await fetchInformationScore()
    setScoreUser(info)
  }



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

export default Perfscore