import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {

  const Layout = () => {
    return (
      <div className='p-4 flex flex-col min-h-screen bg-gray-100'>
        <Header/>
        <Outlet/>
      </div>
    )
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/Login",
          element: <Login/>
        },
        {
          path: "/Register",
          element: <Register/>
        }
      ],
    }
  ]);

  return (
 <div>
  <RouterProvider router={router} />
 </div>
  )
}

export default App
