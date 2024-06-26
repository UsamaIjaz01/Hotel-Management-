import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'; 
import Dashboard from './components/Dashboard.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link, 
  Navigate


} from "react-router-dom";

function App() {
 

  return (
    <Dashboard/>
    
   
  //  <Router> 
  //     <Routes>
  //           <Route exact path="/" element={<Login />} />
  //           <Route path="/dashboard" element={<Dashboard/>} />
  //           <Route path="/dashboard/home" element={<Home />} />

  //           {/* <Route path="/dashboard" element={<Navigate to="/dashboard/home" replace />} /> */}
          
  //     </Routes>
  // </Router>

  )
}

export default App
