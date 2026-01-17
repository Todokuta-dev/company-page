import {Header} from './components/Header.jsx'
import {Home} from './components/Home.jsx'
import {Services} from './components/Services.jsx'
import {About} from './components/About.jsx'
import { Contacts } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true,
      offset:100,
    });
  },[])
  return(
    <>
      <Header/>
      <Home/>
      <Services/>
      <About/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
