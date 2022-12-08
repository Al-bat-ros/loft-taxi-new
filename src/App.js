import React, { useEffect, useState, useContext } from 'react'
import { AuthPage, MapsPage } from './pages';
import { connect } from 'react-redux'
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
// import  AuthPage from './pages/AuthPages/AuthPage';
// import  MapsPage  from './pages/MapPage/MapsPage';
import  FormProfileCard  from './compnents/Forms/FormProfileCard/FormProfileCard';
import { PrivateRoute } from './PrivateRoute'




 function App (props) {
  console.log(props.isLoggedIn)
    return (
  
      <div>
      
        {props.isLoggedIn ? <MapsPage /> : <AuthPage /> } 
       
      </div>

    );
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),


)(App);

  