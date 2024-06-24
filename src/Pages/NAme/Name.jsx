import React, { useEffect } from 'react'
import { countriesAPI } from '../../Dal/Dal'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getOneCountry } from '../../api/NameReducer'
import { useParams } from 'react-router-dom'

const Name = () => {
   const dispatch = useDispatch()
   const {name}=useParams()
   const {country} = useSelector((state)=>state.NameData)
  useEffect(()=>{
   axios.get(`https://restcountries.com/v3.1/name/${name}`)
     .then((ress)=>dispatch(getOneCountry(ress.data)))
  },[])
  return (
    <div>
        {
          country.map((el)=>{
             return <li>{el.name.common}</li>
          })
        }
        
    </div>
  )
}

export default Name