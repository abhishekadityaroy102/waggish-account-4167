import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const navigate=useNavigate()
    const {Auth}=useSelector((state)=>state);
    if(!Auth){
       return <Navigate to="/login"></Navigate>
    }
  return children
}

export default PrivateRoutes