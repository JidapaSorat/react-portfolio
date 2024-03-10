import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componants/Navbar/NavBar'
import Hero from './componants/Hero/Hero'
import Skills from './componants/Skills/Skills'
import Services from './componants/Services/Services'
import Portfolio from './componants/Portfolio/Portfolio'
import Numnum from './componants/Numnum/Numnum'
import Testimonials from './componants/Testimonials/Testimonials'
import Concon from './componants/Concon/Concon'
import Footer from './componants/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Numnum/>
    <Testimonials/>
    <Concon/>
    <Footer/>
    </>
  )
}

export default App;
