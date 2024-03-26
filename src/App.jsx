import React from 'react'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './compontents/Navbar'
import About from './compontents/About/About'
import Service from './compontents/Service'

import Description from './compontents/Description'
import Footer from './compontents/Footer'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contact from './compontents/Contact/Contact'
// import Header from './compontents/Header'
import Header from './compontents/Header/Header'
import Product from './compontents/Product'
import Homepage from './compontents/Homepage'
import Products from './compontents/Products/Products'
import Smart from './compontents/Products/Smart'
import Automatic from './compontents/Products/Automatic'
import Iot from './compontents/Products/Iot'
import WebApp from './compontents/Products/WebApp'
import NetworkDeployment from './compontents/Products/NetworkDeployment'
import EducationalKit from './compontents/Products/EducationalKit'
import Ourservices from './compontents/Services/Ourservices'
import Career from './compontents/Career/Career'
import Apply from './compontents/Apply/Apply'




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

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


   return (
     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
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
           <Route path="career" element={<Career />} />
           <Route path="ourservices" element={<Ourservices />} />
           <Route path="products" element={<Products />} />
           <Route path="apply" element={<Apply />} />

           <Route path="/products/smart-integration" element={<Smart />} />
           <Route
             path="/products/automatic-fare-collection-system"
             element={<Automatic />}
           />
           <Route path="Automatic" element={<Automatic />} />
           <Route path="/products/iot" element={<Iot />} />
           <Route path="/products/web-app" element={<WebApp />} />
           <Route
             path="/products/network-deployment"
             element={<NetworkDeployment />}
           />

           <Route
             path="/products/educational-kit"
             element={<EducationalKit />}
           />
         </Routes>
       </BrowserRouter>
     </div>
   );
 };

export default App