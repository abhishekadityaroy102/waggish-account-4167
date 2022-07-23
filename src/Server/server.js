import axios from "axios"
export const getsearchdata=(query)=>{
  return  axios.get(`https://62d6682d15ad24cbf2d6869c.mockapi.io/city?search=${query}&page=1&limit=10`)
}
export const getcitydata=()=>{
    return axios.get("")
}
export const getmedicaldata=()=>{
    return axios.get("https://62d6682d15ad24cbf2d6869c.mockapi.io/medical?page=1&limit=9")
}
export const getanimaldata=()=>{
    return axios.get("")
}
export const updatedata=(id,newamount)=>{
    return axios.patch(`https://62d6682d15ad24cbf2d6869c.mockapi.io/city/${id}`,{Total_amount:Total_amount+newamount})
}
export const getiddata=(id)=>{
    return axios.get(`https://62d6682d15ad24cbf2d6869c.mockapi.io/city/${id}`)
}