import { Navigate, useNavigate } from "react-router-dom"
import { getiddata, getsearchdata, updatedata } from "../Server/server"

export const Getsearchdata=(query,dispatch)=>{
      getsearchdata(query).then((res)=>dispatch({type:"GetSearch",payload:res.data}))   
}

export const Getiddataaction=(id,dispatch)=>{
      // const navigate=useNavigate()
      getiddata(id).then((res)=>dispatch({type:"Getid",payload:res.data}))
      // navigate(`/donate/${id}`)
      // Navigate(to=`/donate/${id}`)
}
export const Getupdateamount=(id,dispatch,amount)=>{
      updatedata(id,amount).then((res)=>dispatch({type:"Getid",payload:res.data}))
      
}
export const Handleloginaction=(dispatch)=>{
      dispatch({type:"handlelogin"})
}
export const Handleregisteraction=(dispatch)=>{
      dispatch({type:"handleuser"})
}
export const HandleAuthaction=(dispatch)=>{
      dispatch({type:"handleauth"})
}