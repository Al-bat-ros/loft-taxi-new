import React, { useEffect, useState, useContext } from 'react'
import { AuthPage, MapsPage } from './pages';
import { connect } from 'react-redux'
import './styles/base.css';
import { Link, Route, Routes } from "react-router-dom"
import  FormProfileCard  from './compnents/Forms/FormProfileCard/FormProfileCard';
import { PrivateRoute } from './PrivateRoute'




 function App (props) {
    return (
      <div>
        {props.isLoggedIn ? <MapsPage props  /> : <AuthPage props  /> } 
      </div>
    );
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
 
)(App);

  