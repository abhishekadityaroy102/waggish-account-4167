import { Navigate, useNavigate } from "react-router-dom"
import { getiddata, getsearchdata } from "../Server/server"

export const Getsearchdata=(query,dispatch)=>{
      getsearchdata(query).then((res)=>dispatch({type:"GetSearch",payload:res.data}))   
}

export const Getiddataaction=(id,dispatch)=>{
      const navigate=useNavigate()
      getiddata(id).then((res)=>dispatch({type:"Getid",payload:res.data}))
      navigate(`/donate/${id}`)
      // Navigate(to=`/donate/${id}`)
}