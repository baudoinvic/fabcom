import React from 'react'
import Navbar from './compontents/Navbar'
import About from './compontents/About'
import Service from './compontents/Service'
import More from './compontents/More'
import Description from './compontents/Description'
import Footer from './compontents/Footer'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contact from './compontents/Contact/Contact'
import Header from './compontents/Header'

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
                 <About />
                 <Service />
                 <More />

                 <Description />
               </CommonLayout>
             }
           />
           <Route path="/Contact" element={<Contact />} />
         </Routes>
       </BrowserRouter>
     </div>
   );
 };

export default App