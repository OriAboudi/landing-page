import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>OMDB Movies</h1>
        <button className='text-white pr-4' >Sign In</button>
        <button className='bg-red-600 px-t py-2 rounded cursor-pointer text-white '>Sign Up</button>
        
    </div>
  )
}

export default Navbar