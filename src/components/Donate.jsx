import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import  styles from "../Styles/Donate.module.css"
import Containerbox from './Containerbox'
const Donate = () => {
  const data=useSelector((state)=>state.data)
  console.log("donate",data)
  return (
  <div className={styles.donatebox}> 
    <div className={styles.main}>
      {data.map((el)=><Containerbox el={el}/>)}
    </div>
  </div>
  )
}

export default Donate