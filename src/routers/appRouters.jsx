import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import HomeAdmin from '../components/homeAdmin'
import Page1 from '../components/page1'
import Page2 from '../components/page2'
import Page3 from '../components/page3'
import LayoutAdmin from '../layout/layoutAdmin/layoutAdmin'


import Layout from '../layout/layoutUser/layout'

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
        </Route>

        <Route path='/admin' element={<LayoutAdmin />}>
          <Route path='/admin' element={<HomeAdmin />} />
        </Route>

        <Route path='/*' element={<h1>Page Not Found!</h1>} />
      </Routes>
    </Router>
  )
}

export default AppRouters