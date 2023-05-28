import React from 'react'
import { Outlet } from 'react-router-dom/dist'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'




function Layout() {
  return (
    <div>

      <Navbar/>
        <Outlet></Outlet>
        <Footer/>
    </div>
  )
}

export default Layout