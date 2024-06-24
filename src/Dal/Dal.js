import axios from "axios";
import { getAllAC } from "../api/flagsReducer";
import { getRegionAC } from "../api/regionReducer";

 const instanse =axios.create({
    baseURL : 'https://restcountries.com/v3.1'
})

export const countriesAPI ={
    getALL(dispatch){
        instanse.get('/all')
            .then((res)=>dispatch(getAllAC(res.data)))

    },
    getRegion(dispatch,region){
        instanse.get(`region/${region}`)
        .then((res)=>dispatch(getRegionAC(res.data)))
    }

}

