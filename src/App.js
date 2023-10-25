import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import RegistrationPage from './components/Registration'
import Login from './components/Login'
import Events from './components/Events'
import Contact from './components/Contact'
import './App.css'

const App=()=>(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact  path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/registration" element={<RegistrationPage/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/events" element={<Events/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
)

export default App