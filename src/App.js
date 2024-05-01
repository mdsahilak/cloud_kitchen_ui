import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'

import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import FoodItemsList from './components/FoodItemsList.jsx';
import KitchensList from './components/KitchensList.jsx';
import CustomNav from './components/CustomNav.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  
  useEffect(() => {
    // Fetch the user email and token from local storage
    const token = localStorage.getItem('token') ?? '';
    
    // If the token does not exist, mark the user as logged out
    if (!token) {
      setLoggedIn(false)
      return
    }
  }, [])

  return (
    <div className="App">
      <CustomNav email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      
      <div className='m-3'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/foodItems" element={<FoodItemsList />} />
          <Route path="/kitchens" element={<KitchensList />} />

          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
