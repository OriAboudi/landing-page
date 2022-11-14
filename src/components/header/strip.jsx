import React from 'react'
import './header.css'


function Strip() {
  return (
    <div className='container-fluid'>
      <div className='container   d-flex  conteainer-strip p-0'>
        <div className=' main-strip'  >
          <h1 className='h1-strip col-md-12  '>If you can dream it,
           you can sell it with  Shopify</h1>
          <p className='p-section'>Build your business here. Take it anywhere.</p>
          <div className='d-flex  mb-4'>
            <input className='form-control' defaultValue={"Enter your email addess"} type="text" />
            <button className='btn btn-strip mx-3' > Start free trial</button>
          </div>
          <p>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify</p>
        </div>
        <div className='strip-img2'>

        </div>
      </div>
    </div>
  )
}

export default Strip