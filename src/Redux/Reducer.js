const initalvalue={
    data:[]
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
        default:return state
    }
}