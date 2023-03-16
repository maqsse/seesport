import React from 'react'
import datas from '../services/DataMock.json'


const Header = (props) => {

const datasusermaindata = datas.USER_MAIN_DATA;

 const res =  datasusermaindata.map(data=>
  { 
    return data.userInfos.firstName
    
  }
  
  )
  console.log(res)
  return (
    <div className='welcome'>
      <h1>Bonjour {res}</h1>
      <h2>Félicitations! Vous avez explosé vos objectifs hier 👏 </h2>
    </div>
  )
}

export default Header
