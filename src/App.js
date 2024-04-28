import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'

import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import FoodItemsList from './components/FoodItemsList.jsx';
import GMap from './components/GMap.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  // useEffect(() => {
    // Fetch the user email and token from local storage
    // const user = JSON.parse(localStorage.getItem('user'))
  
    // // If the token/email does not exist, mark the user as logged out
    // if (!user || !user.token) {
    //   setLoggedIn(false)
    //   return
    // }
  
  //   // If the token exists, verify it with the auth server to see if it is valid
  //   fetch('http://localhost:3080/verify', {
  //     method: 'POST',
  //     headers: {
  //       'jwt-token': user.token,
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((r) => {
  //       setLoggedIn('success' === r.message)
  //       setEmail(user.email || '')
  //     })
  // }, [])

  return (
    <div className="App">
      <h1> The Cloud Kitchen </h1>

      <hr />
      <p>Welcome to the Cloud Kitchen of the Future.</p>
      <hr />

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/foodItems" element={ <FoodItemsList /> } /> 
            <Route path="/gmap" element= { <GMap /> } />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
