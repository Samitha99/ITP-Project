import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

//Pages
import Home from './page/Home'

function WebApp() {
  return (
    <div>
          <Route path="/home" element={<Home />} />
    </div>
  )
}

export default WebApp
