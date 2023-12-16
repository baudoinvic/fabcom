import React from 'react'
import Navbar from './compontents/Navbar'
import About from './compontents/About/About'
import Service from './compontents/Service'
import More from './compontents/More'
import Description from './compontents/Description'
import Footer from './compontents/Footer'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contact from './compontents/Contact/Contact'
import Header from './compontents/Header'
import Product from './compontents/Product'

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
                 <Product />
                 <More />

                 <Description />
               </CommonLayout>
             }
           />
           <Route path="/Contact" element={<Contact />} />
           <Route path="About" element={<About />} />
         </Routes>
       </BrowserRouter>
     </div>
   );
 };

export default App