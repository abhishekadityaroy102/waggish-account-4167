import axios from "axios"
export const getsearchdata=(query)=>{
  return  axios.get(`http://localhost:8080/millap/?q=${query}&_page=1&_limit=10`)
}
export const getcitydata=()=>{
    return axios.get("")
}
export const getmedicaldata=()=>{
    return axios.get("http://localhost:8080/millap/?_page=1&_limit=9")
}
export const getanimaldata=()=>{
    return axios.get("")
}
export const updatedata=(id,newamount)=>{
    console.log("newupdateamount",newamount)
    return axios.patch(`http://localhost:8080/millap/${id}`,{Total_amount:newamount})
}
export const getiddata=(id)=>{
    return axios.get(`http://localhost:8080/millap/${id}`)
}