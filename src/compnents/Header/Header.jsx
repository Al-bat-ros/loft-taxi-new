import React, { useState, useEffect, useContext} from 'react'
import logoHeader from '../../assets/images/logoHeader.svg';
import { Link, Route, Routes } from "react-router-dom"
import  AuthPage from '../../pages/AuthPages/AuthPage';
import  MapsPage  from '../../pages/MapPage/MapsPage';
import  FormProfileCard  from '../Forms/FormProfileCard/FormProfileCard'
import { PrivateRoute } from '../../PrivateRoute'


export default function Header({ setRouteModal }) {
 
  
 
  return (
    
    <div>
        <header className="main-header">
          <div className="main-header_wrap">
              <div className="main-header_logo">
                <img width="272" height="61" viewBox="0 0 272 61" fill="none" src={logoHeader} alt="Header Logo"></img>
              </div>           
              <div>
                  <Link className="main-header_btn main-header-btn_map " to="/map">
                    <span className="main-header_lable">Карта</span>
                  </Link>
                  <Link className="main-header_btn main-header-btn_profile" to="/profile">
                    <span className="main-header_lable">Профиль</span>
                  </Link>
                  <Link className="main-header_btn main-header-btn_out" to="/AuthPage">
                    <span className="main-header_lable">Выйти</span>
                  </Link>
              </div>
          </div>
        </header>
    </div>
    
    
  )
}
