import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Getiddataaction } from '../Redux/Action'
import styles from "../Styles/Donate.module.css"
const Containerbox = ({el}) => {
  const dispatch=useDispatch()
  return (
    <div className={styles.box} onClick={()=>Getiddataaction(el.id,dispatch)}>
            <div className={styles.imagebox}>
            <img src={el.avatar}/>
            </div>
           <h2>{el.name}</h2>
       <div className={styles.footer}> 
         <div className={styles.percentage}>
          <CircularProgress value={Math.abs(Math.floor((Number(el.     Total_amount)/Number(el.need_amount))*100))} color='green.400'>
            <CircularProgressLabel>{Math.abs(Math.floor((Number(el.Total_amount)/Number(el.need_amount))*100))>100 ? 100:Math.abs(Math.floor((Number(el.Total_amount)/Number(el.need_amount))*100))}%</CircularProgressLabel>
       </CircularProgress>
          <div>
          <p>Raised</p>
          <h2>₹{el.Total_amount}</h2>
          </div>
        </div>
        <div>
            <p>Created by</p>
            <h2>{el.createdAt}</h2>
        </div>
      </div>
    </div>
  )
}

export default Containerbox