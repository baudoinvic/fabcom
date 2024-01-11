import React from 'react'
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
import Login from './compontents/Login/Login'
import Signup from './compontents/Signup/Signup'
import Products from './compontents/Products/Products'
import Smart from './compontents/Products/Smart'
import Automatic from './compontents/Products/Automatic'
import Iot from './compontents/Products/Iot'
import WebApp from './compontents/Products/WebApp'
import NetworkDeployment from './compontents/Products/NetworkDeployment'
import EducationalKit from './compontents/Products/EducationalKit'
import Ourservices from './compontents/Services/Ourservices'
import Career from './compontents/Career/Career'



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
           <Route path="career" element={<Career/>} />
           <Route path="ourservices" element={<Ourservices/>} />
           <Route path="products" element={<Products />} />

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