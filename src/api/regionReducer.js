import { NameState } from "./NameReducer"
const GET_REGION ='get-region'




export const Regionreducer =(state ,action)=>{
    switch(action.type){
    
        case GET_REGION : 
            return {
                ...state,
                countries : action.payload
            }
          

        default :
           return state
    }
}

export const getALLAC = (data)=>{
    return {type :GET_ALL , payload : data}
}

export const getOneCountry = (name)=>{
     return{type : GET_ONE ,payload : name}
}

export const getRegionAC=(region)=>{
    return{type :GET_REGION,payload:region}
}

export const getTextAC = (text) =>{
    return{type : CHANGE_TEXT ,payload :text}
}




