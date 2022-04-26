import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const LoginPage =() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const url = 'https://notflixtv.herokuapp.com/api/v1/users/login'

    const tryLogin = (e) => {
        e.preventDefault()
        
        axios.post(url, 
            {
                email,
                password,
            }, 
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                console.log(response.data)
                const storage = window.localStorage
                storage.setItem('token', response.data.data.token)
            }).catch((error) => {
                console.log(error)
            })
    }

  return (
      <>
    <h1>LoginPage</h1>
    <form>

        <label htmlFor="email">Email</label>
        <input className='border-solid border-2 border-sky-500' id='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password">Password</label>
        <input className='border-solid border-2 border-sky-500' id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={tryLogin}>Login</button>
    </form>
    </>
  )
}

export default LoginPage