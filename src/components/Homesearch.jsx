import React, { useEffect, useState } from 'react'
import { FcSearch } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import { Getsearchdata } from '../Redux/Action';
import styles from "../Styles/Homesearch.module.css"
const Homesearch = () => {
  const data=useSelector((state)=>state.data);
  const dispatch=useDispatch()
  const [text,settext]=useState("")
  const handlechange=(e)=>{
    settext(e.target.value)
  }
  useEffect(()=>{
    if(text.length>0){
    let timerout=setTimeout(() => {
      Getsearchdata(text,dispatch)
    }, 1000);
    return ()=>clearTimeout(timerout)}
  },[text])
  console.log("homesearch",data)
  return (
    <div className={styles.Homesearch}>
        <div>
            <input type="text" placeholder="Search by name,place or charity name" onChange={handlechange}></input>
        </div>
        <div>
        <FcSearch style={{fontSize:"35px"}}/>
        </div>
    </div>
  )
}

export default Homesearch