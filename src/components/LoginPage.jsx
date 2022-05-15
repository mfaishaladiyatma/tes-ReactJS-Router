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
    <div className=' rounded-10px shadow-custom-shadow-1 p-20 m-10'>
    <form className='font-helvetica flex flex-col items-center justify-center gap-y-5'>

        <div className='flex flex-row gap-x-10'>
        <label htmlFor="email">Email</label>
        <input placeholder='Masukkan Email anda' className='w-52 px-2 border-solid border-2 border-gray' id='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className='flex flex-row gap-x-3'>
        <label htmlFor="password">Password</label>
        <input placeholder='Masukkan password anda' className='w-52 px-2 border-solid border-2 border-gray' id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button className='bg-[#5CB85F] text-white w-40 h-10 rounded-10px font-helvetica' onClick={tryLogin}>Login</button>
    </form>
    </div>
    </>
  )
}

export default LoginPage