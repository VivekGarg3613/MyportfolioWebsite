import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function LoginHeader() {
  return (
    <div className='bg-gray-800'>
        <Outlet/>
    </div>
  )
}

export default LoginHeader