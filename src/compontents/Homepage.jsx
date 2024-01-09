import React from 'react'
import Header from './Header'
import Product from './Product'
import Service from './Service'
import Description from './Description'
import Navbar from './Navbar'
import Footer from './Footer'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
      <Description />
      <Product />
      <Footer />
    </>
  );
}

export default Homepage