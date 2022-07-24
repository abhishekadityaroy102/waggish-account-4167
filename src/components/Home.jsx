import React, { useEffect, useState } from 'react'
import { getmedicaldata } from '../Server/server'
import Containerbox from './Containerbox'
import styles from "../Styles/Home.module.css"
import Search from './Search'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import Categoery from '../categories/Categoery'
import Homesearch from './Homesearch'
import Donatenow from '../DonateNow/Donatenow'
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
     <div className={styles.footer}>
      <div className={styles.footerleft}>
        <div className={styles.footerleft1}>
        <h2>Milaap</h2>
        <p>Free Crowdfunding for India</p>
        </div>
        <div className={styles.footerleft2}> 
          <p>Raise funds online for medical emergencies and social causes</p>
          <button>Start a fundrainser -it's FREE</button>
        </div>
        <div className={styles.footerleft3}>
          <div>
            <h2>665,000+</h2>
            <p>Fundraisers</p>
          </div>
          <div>
          <h2>Rs. 2024 Crores +</h2>
            <p>Raised</p>
          </div>
          <div>
          <h2>81 lakhs +</h2>
            <p>Donations</p>
          </div>
        </div>
        <div className={styles.footerleft4}>
          <img src="https://image.shutterstock.com/image-vector/megaphone-black-icon-vector-600w-1253552866.jpg"/>
          <h2>Our crowdfunding platform charges No Fees</h2>
        </div>
        <div className={styles.footerleft5}>
          <h2>Thousands are fundraising online on Milaap</h2>
        </div>
        <div className={styles.footerleft6}></div>


      </div>
      <div className={styles.footerright}>
     <img src="https://as1.ftcdn.net/v2/jpg/05/05/17/88/1000_F_505178824_yUpWilbJKQDU42Dv3teHeWg2qZBOVatf.jpg" border="0"/>
     </div>
     </div>
     <div><Homesearch/></div>
     <div>
      <Categoery/>
     </div>
     <div className={styles.container}>
      {
        data1.map((el)=><Containerbox el={el}/>)
      }
     </div>
    
    </div>
  )
}

export default Home