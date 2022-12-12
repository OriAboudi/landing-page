import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from './headerAdmin/headerAdmin'
function LayoutAdmin() {
    return (
        <div>
            <HeaderAdmin />
            <Outlet />
        </div>
    )
}

export default LayoutAdmin