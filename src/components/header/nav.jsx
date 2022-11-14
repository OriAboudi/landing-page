import React from 'react'
import './header.css'

function Nav() {
    return (
        <div className='container-fluid'>
            <div className='container px-5'>
                <nav className='d-flex'>
                    <div className='d-flex justify-content-between ul1'>
                        <li>Start</li>
                        <li>Sell</li>
                        <li>Market</li>
                        <li>Manage</li>
                    </div>
                    <div className='d-flex   '>
                        <li>Pricing</li>
                        <li>Learn</li>
                        <li>Login</li>
                        <div className='d-flex align-content-center justify-content-center'>
                        </div>


                    </div>
                            < button className='btn btn1'>Start free trial</button>
                </nav>
            </div>

        </div>
    )
}

export default Nav