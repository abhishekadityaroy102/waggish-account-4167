import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getmedicaldata } from '../Server/server'
import  styles from "../Styles/Donate.module.css"
import Containerbox from './Containerbox'
const Donate = () => {
  const [unchange,setunchange]=useState([])
  const {donatedata,data}=useSelector((state)=>state)
  useEffect(()=>{
    getmedicaldata().then((res)=>setunchange(res.data))
  },[])
  console.log("unchange",unchange)
  // console.log("donate",data)
  return (
  <div className={styles.donatebox}> 
    <div className={styles.main}>
      {data.map((el)=><Containerbox el={el}/>)}
    </div>
    <div className={styles.middle}>
      middle
    </div>
    <div className={styles.main}>
     {
      unchange.map((el)=><Containerbox el={el}/>)
     }
    </div>
  </div>
  )
}

export default Donate