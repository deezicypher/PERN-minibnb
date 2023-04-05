import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-4 grow flex justify-center items-center ' >
        <div className='mb-32'>
        <h1 className='text-4xl text-center'>Login</h1>
        <form className='max-w-md mx-auto '>
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <button className='primary'>Login</button>
            <div className='text-center mt-4 text-gray-500'>Don't have an account yet? <Link to="/register" className='underline text-black'>Register now</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login