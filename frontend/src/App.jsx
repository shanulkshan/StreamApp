import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import HomePage from './Homepage'
import LiveStreamingPage from './Stream'
import SportsPage from './WatchNow'
import SignUp from './SignUp'
import SignIn from './SignIn'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={< SportsPage/>} />
        <Route path="/stream" element={<LiveStreamingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        

        
      </Routes>
    </BrowserRouter>


    
      
    
      
    
    
  )
}

export default App
