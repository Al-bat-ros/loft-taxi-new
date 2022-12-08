import React, { useState, useEffect } from 'react';
import { FormInput, FormReg } from '../../compnents'
import logo from '../../assets/images/logo.svg';
import { connect } from 'react-redux';
import { authenticate } from '../../store/action-creators/actions'
import { Routes, Route, Link } from 'react-router-dom'

import './AuthPageStyle.css';



 function AuthPages(props){
    
    return (
        <div className="input-page">
            <header className="Main-Header">
                <div className="Main-Header_container">
                    <div className="Main-Header_Logo">
                         <img src={logo} className="Header-Logo" alt="logo" />
                    </div>
                </div>
            </header>

            <Routes>
              <Route path="/FormReg" element={<FormReg />} />
              <Route path="/FormInput" element={<FormInput />} />
              <Route path="*" element={<FormInput />} />
            </Routes>   
            

        </div>        
    )       
}
export default connect( 
    state => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
)(AuthPages)
