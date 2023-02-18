import React from 'react'
import './styles/home.css'
import WeatherWidget from '../components/WeatherWidget'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <WeatherWidget/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
