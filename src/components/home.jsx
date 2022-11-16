import React from 'react'
import Nav from './header/nav'
import Secion2 from './mainContent/secion2'
import Secion3 from './mainContent/secion3'
import Section1 from './mainContent/section1'

function Home() {
  return (
    <div >
        <Nav/>
        <Section1/>
        <Secion2/>
        <Secion3/>
      
    </div>
  )
}

export default Home