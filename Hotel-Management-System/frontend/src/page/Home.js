import React from 'react'
import Dashboard from '../views/dashboard/Dashboard'
import Navbar from './component/navbar'
import Page from './Page'
import FooterPage from './component/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
      <Page />
      <FooterPage />
    </>
  )
}

export default Home
