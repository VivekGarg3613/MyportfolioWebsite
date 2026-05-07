import React from 'react'
import Will from '../assets/Will.jpeg'
// import MovieRow from '../components/MovieRow'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
function MainLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default MainLayout