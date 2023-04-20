import { useState } from 'react'
import { Link } from 'react-router-dom'

import toast from 'react-hot-toast';
import instance from '../../config';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email:'',
    password: ''
  }) 

  const {username, email, password} = inputs

  const handleChange = (e) => {
    setInputs(data => ({...data, [e.target.name]: e.target.value}))
  }

  const register = async (e) => {
    e.preventDefault()
      try {

        await instance.post('/users/register', inputs)
        toast.success("Registration successfull")

      } catch (error) {

        console.log(error)
        toast.error("Unable to proceed further at the moment")

      }
  }
  return (
    <div className='mt-4 grow flex justify-center items-center ' >
        <div className='mb-32'>
        <h1 className='text-4xl text-center'>Register</h1>
        <form className='max-w-md mx-auto p-4' onSubmit={register}>
            <input type="text" placeholder="Username" required value={username} name="username" onChange={e =>handleChange(e)} />
            <input type="email" placeholder="Email address"  required  value={email} name="email" onChange={e =>handleChange(e)}/>
            <input type="password" placeholder="Password" required value={password} name="password" onChange={e =>handleChange(e)} />
            <button className='primary' type='submit'>Register</button>
            <div className='text-center mt-4 text-gray-500'>Have an account? <Link to="/Login" className='underline text-black'>Login</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Register