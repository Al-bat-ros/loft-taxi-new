import React, { useState, useEffect } from 'react';
import { FormInput, FormReg } from '../../compnents'
import logo from '../../assets/images/logo.svg';

import './AuthPageStyle.css';



export default function AuthPages(){

    const [routeReg, setRouteReg] = useState(false);
    

    return (
        <div className="input-page">
            <header className="Main-Header">
                <div className="Main-Header_container">
                    <div className="Main-Header_Logo">
                         <img src={logo} className="Header-Logo" alt="logo" />
                    </div>
                </div>
            </header>
            
            {routeReg ? <FormReg setRouteReg={setRouteReg} /> : <FormInput  setRouteReg={setRouteReg}  /> }
            
        </div>        
    )       
}

