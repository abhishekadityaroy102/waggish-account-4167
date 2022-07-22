import React, { useEffect, useState } from 'react'
import { getmedicaldata } from '../Server/server'
import Containerbox from './Containerbox'
import styles from "../Styles/Home.module.css"
import Search from './Search'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  const data=useSelector((state)=>state.data)
  if(data.length>0){
    navigate("/donate")
  }
  const [data1,setdata]=useState([])
  useEffect(()=>{
     getmedicaldata().then((res)=>setdata(res.data))
  },[])
  return (
    <div>
     <div>front page</div>
     <div><Search/></div>
     <div>Type search</div>
     <div className={styles.container}>
      {
        data1.map((el)=><Containerbox el={el}/>)
      }
     </div>
    </div>
  )
}

export default Home