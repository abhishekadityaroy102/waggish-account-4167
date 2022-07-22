import { getsearchdata } from "../Server/server"

export const Getsearchdata=(query,dispatch)=>{
      getsearchdata(query).then((res)=>dispatch({type:"GetSearch",payload:res.data}))   
}
