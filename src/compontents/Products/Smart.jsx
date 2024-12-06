


import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Smart = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-16 px-4 md:px-10 mb-32 md:mb-64">
        <div className="flex flex-col lg:flex-row mt-8 items-center lg:items-start gap-8">
          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg border border-gray-500"
              src="https://www.iotallknow.com/wp-content/uploads/2022/11/%E6%99%BA%E8%83%BD%E7%81%8C%E6%BA%89%E7%9A%84%E5%BA%94%E7%94%A8%E5%AE%9E%E4%BE%8B.webp"
              alt="Large Background"
            />
            <img
              className="absolute bottom-[-60px] sm:bottom-[-80px] md:bottom-[-100px] left-4 sm:left-8 w-2/5 sm:w-1/3 max-w-xs rounded-lg border border-gray-500 shadow-lg"
              src="https://www.iotallknow.com/wp-content/uploads/2022/11/%E6%99%BA%E8%83%BD%E7%81%8C%E6%BA%89%E7%9A%84%E5%BA%94%E7%94%A8%E5%AE%9E%E4%BE%8B.webp"
              alt="Small Foreground"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-gray-600 space-y-4 mt-16">
            <span className="text-purple-800 font-bold text-sm sm:text-base md:text-lg">
              Smart Integration
            </span>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Smart integration typically refers to the integration of smart
              technologies or devices into various systems or processes to
              enhance efficiency, automation, and functionality. The aim of
              smart integration is to create seamless and intelligent
              connections between different components, enabling them to work
              together cohesively and provide added value. This concept is
              commonly associated with the broader idea of the "Internet of
              Things" (IoT) and smart systems. Smart Systems Integration as a
              cross-section technology opens up the possibility to harness
              physical effects - macro, micro, or nano. This applies to the
              design of new materials, such as nano-materials (CNTs) or
              nanopowder, as well as for the use of highly porous materials or
              functional surfaces.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Smart;
