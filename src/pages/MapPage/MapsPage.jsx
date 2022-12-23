import React, { useState, useEffect } from 'react'
import {Header, FormOrder, FormProfileCard, Maps, ModalTransitionMap } from '../../compnents'
import { connect } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom'
import { addressListSuccess } from '../../store/action-creators/actions'
import { useSelector } from 'react-redux';
// import  AuthPage from '../AuthPages/AuthPage'
// import { PrivateRoute } from '../../PrivateRoute'

import './mapStyle.css'
import AuthPage from '../AuthPages/AuthPage';


 function MapsPage({ props }) {
  
  useEffect(() => {
    
    if(props) {
      addressListSuccess()
    }  
  },[])

  return (
    
    <div>
      <Header />
      <Maps />
      <Routes>
        <Route path="/map" element={<FormOrder />} />
        <Route path="/profile" element={<FormProfileCard />} />
        <Route path="*" element={<FormOrder />} />
      </Routes>
      
      
    </div> 
  )
}
export default connect( 
  state => ({isLoggedIn: state.auth.isLoggedIn}),
  { addressListSuccess  }
)(MapsPage)

