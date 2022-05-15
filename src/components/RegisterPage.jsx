import axios from 'axios'
import React from 'react'
import { useState } from 'react'


const RegisterPage = () => {
    // const[firstName, setFirstName] = useState('')
    // const[lastName, setLastName] = useState('')
    // const[email, setEmail] = useState('')
    // const[password, setPassword] = useState('')
    // const[confirmationPassword, setConfirmationPassword] = useState('')
    // const[post, setPost] = useState([])

    // const url = 'https://notflixtv.herokuapp.com/api/v1/users'

    // const tryPost = (e) => {
    //     e.preventDefault()
    //     axios.post(url,
    //     {
    //         first_name: firstName,
    //         last_name: lastName,
    //         email,
    //         password,
    //         password_confirmation: confirmationPassword
    //     },
    //     {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((response)=>{
    //         console.log(response)
    //         setPost([...post, response.data])
    //         const storage = window.localStorage
    //         storage.setItem('token', response.data.data.token)
    //         console.log(storage)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    

    const url = 'https://notflixtv.herokuapp.com/api/v1/users'

    const tryPost = (e) => {
        e.preventDefault()

        axios.post(url,
            {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                password_confirmation: passwordConfirmation

        },{
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            console.log(response)
            const storage = window.localStorage
            storage.setItem('token', response.data.data.token)
            console.table(storage)
        }).catch((error) => {
            console.log(error)
        })
    }
    

  return (

      <>

    <div className=' shadow-custom-shadow-1 rounded-10px p-20 m-10'>
    <form className='flex flex-col items-center font-helvetica w-full'>

        <div className=' flex flex-col items-stretch w-96 gap-y-3'>

        <div className='flex flex-row justify-between'>
        <label htmlFor="first_name">First Name</label>
        <input className='border-solid border-2 border-gray' id='first_name' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className='flex flex-row justify-between'>
        <label htmlFor="last_name">Last Name</label>
        <input className='border-solid border-2 border-gray' id='last_name' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>

        <div className='flex flex-row justify-between'>
        <label htmlFor="email">Email</label>
        <input className='border-solid border-2 border-gray' id='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className='flex flex-row justify-between'>
        <label htmlFor="password">Password</label>
        <input className='border-solid border-2 border-gray' id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className='flex flex-row justify-between'>
        <label htmlFor="password_confirmation">Password Confirmation</label>
        <input className='border-solid border-2 border-gray' id='password_confirmation' type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        </div>

        <button className='bg-[#5CB85F] p-3 text-white rounded-10px' onClick={tryPost}>Register</button>
        </div>
    </form>
    </div>
    </>
  )
}

export default RegisterPage