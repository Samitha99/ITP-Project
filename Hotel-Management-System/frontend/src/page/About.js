import React from 'react'
import Dashboard from '../views/dashboard/Dashboard'
import Navbar from './component/navbar'
// import About from './About'
import FooterPage from './component/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function About() {
  return (
    <>
      <Navbar />
      <h1>About</h1>
      <FooterPage />
    </>
  )
}

export default About
