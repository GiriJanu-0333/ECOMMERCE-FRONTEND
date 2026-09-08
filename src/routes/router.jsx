import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from "../pages/login/Login"
import Register from '../pages/register/Register'
import Home from '../pages/home/Home'
export const router=createBrowserRouter([
  {
    element:<App/>,
    path:'/',
    children:[{
    index :true,
  element :<Home/>},
  {
    path:"/login",
    element:<Login/>
  },{
    path:"/register",
    element:<Register/>
  }
]
  }
])
