import { useState } from 'react'
import './App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Links from './components/Links'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {

  return (
    <>
    <HashRouter>
    <Header />
    <CustomCursor />
    <Links />
    <Footer />
    </HashRouter>
    </>
  )
}

export default App
