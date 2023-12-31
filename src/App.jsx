import React from 'react'
import Navbar from './compontents/Navbar'
import About from './compontents/About/About'
import Service from './compontents/Service'

import Description from './compontents/Description'
import Footer from './compontents/Footer'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contact from './compontents/Contact/Contact'
import Header from './compontents/Header'
import Product from './compontents/Product'
import Homepage from './compontents/Homepage'
import Login from './compontents/Login/Login'
import Signup from './compontents/Signup/Signup'
import Products from './compontents/Products/Products'

 const CommonLayout = ({ children }) => {
   return (
     <>
       <Navbar />
       <Outlet />
       {children}
       <Footer />
     </>
   );
 };

 const App = () => {
   return (
     <div>
       <BrowserRouter>
         <Routes>
           <Route
             path="/"
             element={
               <CommonLayout>
                 <Header />
                 <Service />
                 <Description />
                 <Product />

              
               </CommonLayout>
             }
           />
           <Route path="/Contact" element={<Contact />} />
           <Route path="About" element={<About />} />
           <Route path="homepage" element={<Homepage />} />
           <Route path="login" element={<Login />} />
           <Route path="signup" element={<Signup />} />
           <Route path='products'element={<Products/>} />
         </Routes>
       </BrowserRouter>
     </div>
   );
 };

export default App