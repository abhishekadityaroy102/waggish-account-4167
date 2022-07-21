import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import Allroutes from '../Routes/Allroutes'
import { NavLink } from 'react-router-dom'
import styles from "../Styles/Navbar.module.css"
import Search from './Search'
import { FaBeer, FaPiggyBank, FaRegUserCircle, FaSearch, FaUserAlt } from 'react-icons/fa';
const active = {
    backgroundColor: "brown",
    color:"rgb(197, 189, 189)",
    height:"60px",
    width:"250px",

    // border:"3px solid pink",
    padding:"15px",
    textDecoration: "none"
  };
  const base = {
    color: "black",
    height:"60px",
    // border:"3px solid pink",
    width:"250px",
    padding:"15px",
    
    
    textDecoration: "none"
  };
const stylesnav = ({ isActive }) => (isActive ? active : base);
const Navbar = () => {
    const [search,setsearch]=useState(false)
    const [query,setquery]=useState(false)
  return (
   <div className={styles.main}>
     <div className={styles.navbar}>
         <div className={styles.logo}>
             <NavLink to="/" onClick={()=>{setsearch(false),setquery(false)}}><Box><img src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"></img></Box></NavLink>
          </div>
       <div className={styles.options}>
            <NavLink style={stylesnav} to="/" onClick={()=>{setsearch(false),setquery(false)}}>
          Home
            </NavLink>
            <NavLink style={stylesnav} to="/donate" onClick={()=>{setquery(true),setsearch(false)}}>Donate</NavLink>
            <NavLink style={stylesnav} to="/lend"  onClick={()=>{setquery(false),setsearch(false)}}>Lend</NavLink>
            <NavLink style={stylesnav} to="/pricing"  onClick={()=>{setquery(false),setsearch(false)}}>Pricing</NavLink>
            <NavLink style={stylesnav} to="/contact"  onClick={()=>{setquery(false),setsearch(false)}}>Contact us</NavLink>
       </div>
           <div className={styles.search}>
        {query==true ? 
               <div style={{display:"flex",gap:"20px",marginTop:"8px"}}>
               <div style={{marginTop:"10px"}}><button style={{outline:"none",border:"none"}} onClick={()=>setsearch(!search)}>{search ?"Cancel Search" :`🔍 Search`}</button> </div ><div  style={{backgroundColor:"brown",borderRadius:"10px",height:"40px",marginTop:"7px"}}><NavLink style={{color:"white",backgroundColor:"brown",borderRadius:"10px",padding:"10px"}} to="startfund" onClick={()=>setquery(false)}>+Start Funding</NavLink></div>
              </div>
        :<div style={{display:"flex"}}><div style={{width:"100px"}}></div><div style={{backgroundColor:"brown",borderRadius:"10px",height:"40px",marginTop:"7px",marginTop:"14px"}}>  <NavLink style={{color:"white",backgroundColor:"brown",borderRadius:"10px",height:"60px",padding:"10px"}} to="startfund"   onClick={()=>{setquery(false),setsearch(false)}}>+ Start Funding</NavLink></div></div>
              }
            </div>
      
           <div className={styles.user}>
               <NavLink style={{marginTop:"30px"}} to="/login" onClick={()=>{setquery(false),setsearch(false)}}><FaRegUserCircle style={{fontSize:"40px"}}/></NavLink>
          </div>
        </div>
    <div>{
 query&& search ? <Search/>:<div></div>
}</div>
    
    <Allroutes/>
   </div>
  )
}

export default Navbar