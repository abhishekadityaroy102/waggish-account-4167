import React, { useState } from 'react'
import {RemoveScroll} from "react-remove-scroll"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, useDisclosure, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, HStack, Center, Divider, Text, Button, Spacer } from '@chakra-ui/react'
import Allroutes from '../Routes/Allroutes'
import { NavLink } from 'react-router-dom'
import styles from "../Styles/Navbar.module.css"
import Search from './Search'
import { FaBeer, FaPiggyBank, FaRegUserCircle, FaSearch, FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import User from '../Modal/User'
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
  const dispatch=useDispatch()
  const { onOpen, onClose, isOpen } = useDisclosure()
    const [search,setsearch]=useState(false)
    const [query,setquery]=useState(false)
    const loginupdate=()=>{
      setquery(false),setsearch(false)
      // alert("I am login")
    }
    
  return (
   <div className={styles.main}>
     <div className={styles.navbar}>
         <div className={styles.logo}>
             <NavLink to="/" onClick={()=>{setsearch(false),setquery(false),dispatch({type:"Cleardata"})}}><Box><img src="https://assets.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png"></img></Box></NavLink>
          </div>
       <div className={styles.options}>
            <NavLink style={stylesnav} to="/" onClick={()=>{setsearch(false),setquery(false),dispatch({type:"Cleardata"})}}>
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
               <NavLink style={{marginTop:"30px"}} to="/login" onClick={()=>loginupdate()}>
               {/* <Popover placement="bottom-end">
    <PopoverTrigger>
      <Button variant="ghost" ><FaRegUserCircle style={{fontSize:"40px"}}/></Button>
      
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      
      <PopoverBody bgColor="burlywood" color="whitesmoke">
        <HStack>
        <Text onClick={()=>handleloginpage}>Login</Text>
        <Center height='50px'>
  <Divider orientation='vertical'  />
</Center>
        <Text onClick={()=>handle}>Register</Text>
        </HStack>
      </PopoverBody>
    </PopoverContent>
  </Popover> */}
                <User onOpen={onOpen}/>
                </NavLink>
          </div>
          
        </div>
    <div>{
 query&& search ? <Search/>:<div></div>
}</div>

    <div className={styles.router}>
    <Allroutes/>
    </div>
  
   </div>
  )
}

export default Navbar