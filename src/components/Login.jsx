import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiClient from '../Services/ApiClient'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()
  
  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')
    
    // Check if the user has entered both fields
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }

    login()
  }

  // Log in a user using email and password
  async function login() {
    const userData = {
      email: email,
      password: password
    };

    try {
      let respone = await apiClient.post('account/login', userData);
      let token = respone.data.token;

      if (token) {
        localStorage.setItem('token', token);

        props.setLoggedIn(true)

        console.log("Logged in!!")

        navigate('/')
      } else {
        window.alert('Wrong email or password');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login