import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../components/home'
import Page1 from '../components/ListMovies'
import Page2 from '../components/MoviesInfo'
import Layout from '../layout/layout'
function AppRouters() {
  return (
<Router>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/:search' element={<Home/>}/>
            <Route path='/ListMovies' element={<Page1/>}/>
            <Route path='/MoviesInfo/:id' element={<Page2/>}/>
            <Route path='/*' element={<h1 className='text-center mt-[50px] text-[50px]'>Page Not Found!</h1>}/>
        </Route>
    </Routes>
</Router>
  )
}

export default AppRouters