import React from 'react'
import Why from './Why'
import About from './About'
import Banner from './Banner'
import How from './How'
import Swap from './Swap'
import Carousel from './Carousel'
import Number from './Number'
import Footer from './Footer'
import AuthLayout from '../Layout/AuthLayout'
function Home() {
  return (
    <AuthLayout>
      <Banner />
      <Swap />
      <About />
      <How />
      <Why />
      <Carousel />
      <Number />
      <Footer />
    </AuthLayout>
  )
}

export default Home
