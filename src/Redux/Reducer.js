const initalvalue={
    data:[],
    donatedata:[],
    user:true,
    Auth:false,
}
export const Reducer=(state=initalvalue,{type,payload})=>{
    console.log("reducer data",payload,type)
    switch(type){
        
        case "GetSearch":{
            console.log(type)
            console.log("case",payload)
            return {...state,data:payload}
        }
        case "Getdata":{
            return {...state,data:[...payload]}
        }
        case "Cleardata":{
            return {...state,data:[]}
        }
        case "Getid":{
            return {
                ...state,donatedata:[payload]
            }
        }
        case "handleuser":{
            return {
                ...state,user:false
            }
        }
        case "handlelogin":{
            return{
                ...state,user:true
            }
        }
        case "handleauth":{
            return {
                ...state,Auth:true
            }
        }
        default:return state
    }
}