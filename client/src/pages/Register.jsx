import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='mt-4 grow flex justify-center items-center ' >
        <div className='mb-32'>
        <h1 className='text-4xl text-center'>Register</h1>
        <form className='max-w-md mx-auto p-4'>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <button className='primary'>Register</button>
            <div className='text-center mt-4 text-gray-500'>Have an account? <Link to="/Login" className='underline text-black'>Login</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Register