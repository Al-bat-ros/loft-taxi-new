import React, { useState, useEffect } from 'react'
import {Header, FormOrder, FormProfileCard, Maps } from '../../compnents'
import { Routes, Route, Link } from 'react-router-dom'
import  AuthPage from '../AuthPages/AuthPage'
import { PrivateRoute } from '../../PrivateRoute'

import './mapStyle.css'

export default function MapsComp({}) {


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
