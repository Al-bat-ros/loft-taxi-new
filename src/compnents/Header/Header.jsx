import React, { useState, useEffect, useContext} from 'react'
import logoHeader from '../../assets/images/logoHeader.svg';
import { AuthContext } from '../../context/AuthContext';



export default function Header({ setRouteModal }) {
  const auth = useContext(AuthContext)
  
 
  return (
    
    <div>
        <header className="main-header">
          <div className="main-header_wrap">
              <div className="main-header_logo">
                <img width="272" height="61" viewBox="0 0 272 61" fill="none" src={logoHeader} alt="Header Logo"></img>
              </div>           
              <div>
                  <button className="main-header_btn main-header-btn_map " onClick={() => {setRouteModal("formOrder")}}>
                    <span className="main-header_lable">Карта</span>
                  </button>
                  <button className="main-header_btn main-header-btn_profile" onClick={() => {setRouteModal("formProfileCard")}}>
                    <span className="main-header_lable">Профиль</span>
                  </button>
                  <button className="main-header_btn main-header-btn_out" onClick={() => {auth.logOut(true)}}>
                    <span className="main-header_lable">Выйти</span>
                  </button>
              </div>
          </div>
        </header>
    </div>
    
  )
}
