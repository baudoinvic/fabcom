import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./compontents/Navbar";
import Service from "./compontents/Service";
import Description from "./compontents/Description";
import Footer from "./compontents/Footer";
import Header from "./compontents/Header/Header";
import Product from "./compontents/Product";
import Homepage from "./compontents/Homepage";
import Products from "./compontents/Products/Products";
import Smart from "./compontents/Products/Smart";
import Automatic from "./compontents/Products/Automatic";
import Iot from "./compontents/Products/Iot";
import WebApp from "./compontents/Products/WebApp";
import NetworkDeployment from "./compontents/Products/NetworkDeployment";
import EducationalKit from "./compontents/Products/EducationalKit";
import Career from "./compontents/Career/Career";
import Apply from "./compontents/Apply/Apply";
import Contact from "./compontents/Contact/Contact";
import Provider from "./compontents/Provider/Provider";
import Mission from "./compontents/Mission/Mission";
import ScrollToTop from "./compontents/ScrollToTop/ScrollToTop";

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
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white  duration-200">
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/products" element={<Products />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/provider" element={<Provider />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/products/smart-integration" element={<Smart />} />
          <Route
            path="/products/automatic-fare-collection-system"
            element={<Automatic />}
          />
          <Route path="/Automatic" element={<Automatic />} />
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

export default App;
