import React, {useState,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import instance from '../../config';
import { UserContext } from '../context/userContext';




const Login = () => {
  const [inputs, setInputs] = useState({
    email:'',
    password: ''
  }) 

  const {setUser} = useContext(UserContext)

  const navigate = useNavigate();
  const { email, password} = inputs

  const handleChange = (e) => {
    setInputs(data => ({...data, [e.target.name]: e.target.value}))
  }

  const login = async (e) => {
    e.preventDefault()
      try {
        const res = await instance.post('/users/login', inputs)
        setUser(res.data)
        toast.success("Login successfull")
        navigate('/')
      } catch (error) {
        console.log(error.response)
        toast.error(error.response.data.message)
      }
  }
  


  return (
    <div className='mt-4 grow flex justify-center items-center ' >
        <div className='mb-32'>
        <h1 className='text-4xl text-center' >Login</h1>
        <form className='max-w-md mx-auto' onSubmit={login}>
            <input type="email" placeholder="Email address"  required  value={email} name="email" onChange={e =>handleChange(e)}/>
            <input type="password" placeholder="Password" required value={password} name="password" onChange={e =>handleChange(e)} />
            <button className='primary' type='submit'>Login</button>
            <div className='text-center mt-4 text-gray-500'>Don't have an account yet? <Link to="/register" className='underline text-black'>Register now</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login