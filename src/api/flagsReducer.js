const GET_ALL = 'get-all'

export const initState ={
   countries : [],
}


export const FlagsReducer =(state , action)=>{
    switch(action.type){
        case GET_ALL:
            return{
                ...state ,
                countries : action.payload
            }
       
       
       
        default :
        return state 
    }
}

export const getAllAC=(data)=>{
    return{type : GET_ALL,payload:data}
}

