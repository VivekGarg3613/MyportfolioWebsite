import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header() {

  const navStyle = ({ isActive }) =>
  `px-5 py-2 rounded-lg text-sm font-semibold transition
  ${isActive
    ? 'bg-blue-600 text-white'
    : 'text-slate-300 hover:bg-slate-800 hover:text-blue-400'
  }`;

  return (
         <div className='sticky top-0 flex justify-center gap-3 p-4 bg-slate-950 border-b border-blue-500/30 shadow-lg'>

        <NavLink to='/' end className={navStyle}>Home</NavLink>

        <NavLink to='About' className={navStyle}>About</NavLink>

        <NavLink to='Contact' className={navStyle}>Contact</NavLink>

        <NavLink to='Github/VivekGarg3613' className={navStyle}>Github</NavLink>

        <NavLink to='Upload' className={navStyle}>Upload</NavLink>

      </div>
  )
}

export default Header