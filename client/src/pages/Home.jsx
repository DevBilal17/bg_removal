import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import RemovalSlider from '../components/RemovalSlider'
import Testimonials from '../components/Testimonials'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Steps/>
      <RemovalSlider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Home
