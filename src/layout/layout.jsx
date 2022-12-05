import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './heaser/header'
function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout