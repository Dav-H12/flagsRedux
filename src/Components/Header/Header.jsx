import React from 'react'
import { countriesAPI } from '../../Dal/Dal'
import { useDispatch } from 'react-redux'





const region = ['Ocenia','Europe','Africa','Asia','Americas']
const Header = () => {
 
 const dispatch = useDispatch()

  return (
    <div className='Header'>
       <p className='pb'><b>Flags</b></p>
     <div className='buttonDiv'>
       <button onClick={()=>countriesAPI.getALL(dispatch)}>All</button>
         {
            region.map((el)=>{
                return <button onClick={()=>countriesAPI.getRegion(dispatch,el)}>{el}</button>
            })
         }


     </div>
     <input type="text" />

    </div>
  )
}

export default Header