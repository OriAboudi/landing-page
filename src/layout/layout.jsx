import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './heaser/header'
import Navbar from './heaser/Navbar'
function Layout() {
    return (
        <div>
            {/* <Header /> */}
            <Navbar/>
            <Outlet />
        </div>
    )
}

export default Layout