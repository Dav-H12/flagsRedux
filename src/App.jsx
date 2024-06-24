import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { countriesAPI } from "./Dal/Dal";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
   useEffect(()=>{
     countriesAPI.getALL(dispatch)
   },[])

  return (
    <div className="App">
      <Header />
      <Routes> 
         <Route path='/' element={<Home/>}/>
         <Route path='/:name' element={<Name/>}/>
      </Routes>
    </div>
  );
}

export default App;
