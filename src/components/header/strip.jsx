import React from 'react'
import './header.css'


function Strip() {
  return (
    <div>
      <div className='container d-flex'>
        <div className='px-5' >
          <h2 className='h2-strip'>If you can dream it, you can sell it with Shopify</h2>
          <p>Build your business here. Take it anywhere.</p>
          <div>
            <input className='col-6 form-control' defaultValue={"Enter your email addess"} type="text" />
            <button className='btn' > Start free trial</button>
          </div>
          <p>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify</p>
        </div>
        <div className='strip-img'>

        </div>
      </div>
    </div>
  )
}

export default Strip