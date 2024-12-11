import React from 'react'
// import Header from './Header'
import Header from './Header/Header'
import Product from './Product'
import Description from './Description'
import Navbar from './Navbar'
import Footer from './Footer'

const Homepage = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Description />
      <Product />
      <Footer />
    </>
  );
}

export default Homepage