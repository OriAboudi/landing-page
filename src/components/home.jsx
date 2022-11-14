import React from 'react'
import Footer from './footer/footer'
import Nav from './header/nav'
import Strip from './header/strip'
import Secion2 from './mainContent/secion2'
import Secion3 from './mainContent/secion3'
import Section1 from './mainContent/section1'

function Home() {
  return (
    <div>
        <Nav/>
        <Strip/>
        <Section1/>
        <Secion2/>
        <Secion3/>
        <Footer/>
    </div>
  )
}

export default Home