import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FcSearch } from 'react-icons/fc';
import { Getsearchdata } from '../Redux/Action';
import styles from "../Styles/Search.module.css"
import { useDispatch,useSelector } from 'react-redux';
const Search = () => {
  const data=useSelector((state)=>state);
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
  console.log("search",data)
  return (
    <div className={styles.search}>
    <div className={styles.box} >
      
      <Input  isInvalid
    errorBorderColor='red.300' type="search" placeholder='search by name, place or location' onChange={handlechange}></Input>
   <FcSearch style={{fontSize:"35px"}}/>
    </div>
    </div>
  )
}

export default Search