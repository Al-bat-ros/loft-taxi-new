import React, { useEffect, useState, useContext } from 'react'
import { AuthPage, MapsPage } from './pages';
import { AuthContext } from './context/AuthContext'
import './App.css';



 function App (props) {

   const auth = useContext(AuthContext)
   
   
   useEffect(()=> {
    console.log(props)
   })
  
    return (
      
      <div>
        {auth.isLogedIn ? <MapsPage /> : <AuthPage /> } 
      
      </div>

    );
}

export default App;

  