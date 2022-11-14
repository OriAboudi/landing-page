
import React from 'react'
import './header.css'
import Strip from './strip'

function Nav() {
    return (
        <div className='container-fluid '>
            <div className='container'>
                <nav className='col-md-6 d-flex '>
                    <div className='d-flex justify-content-between ul1'>
            
                        <div className='img'></div>
                        <li>Start</li>
                        <li>Sell</li>
                        <li>Market</li>
                        <li>Manage</li>
                    </div>
                    <div className='d-flex   '>
                        <li>Pricing</li>
                        <li>Learn</li>
                        <li>Login</li>
                   
                    </div>
                    < button className='btn btn-nav'>Start free trial</button>
                </nav>
                <Strip/>
            </div>

        </div>
    )
}

export default Nav