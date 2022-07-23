import React from 'react'
import {Routes,Route} from "react-router-dom"
import Contatct from '../components/Contatct'
import Donate from '../components/Donate'
import Home from '../components/Home'
import Lend from '../components/Lend'
import Login from '../components/Login'
import Pricing from '../components/Pricing'
import Startfund from '../components/Startfund'
import Donatenow from '../DonateNow/Donatenow'
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/donate" element={<Donate/>}></Route>
        <Route path="/donate/:id" element={<Donatenow/>}></Route>
        <Route path="/lend" element={<Lend/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/startfund" element={<Startfund/>}></Route>
        <Route path="/contact" element={<Contatct/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
    </Routes>
  )
}

export default Allroutes