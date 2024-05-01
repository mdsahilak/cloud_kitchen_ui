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
    const user = localStorage.getItem('token');
    
    // If the token/email does not exist, mark the user as logged out
    if (!user.token) {
      setLoggedIn(false)
      return
    }
  }, [])

  return (
    <div className="App">
      <CustomNav />
      
      <div className='m-3'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/foodItems" element={<FoodItemsList />} />
          <Route path="kitchens" element={<KitchensList />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
