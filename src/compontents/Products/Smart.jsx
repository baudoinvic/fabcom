import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';

const Smart = () => {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-32">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          Smart Integration
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row mx-4 md:mx-10 lg:mx-20 xl:mx-32 ">
        <div className="w-full lg:w-1/2 lg:mr-5">
          <span className="mr-4 mt-4">
            "Smart integration" typically refers to the integration of smart
            technologies or devices into various systems or processes to enhance
            efficiency, automation, and functionality. The aim of smart
            integration is to create seamless and intelligent connections
            between different components, enabling them to work together
            cohesively and provide added value. This concept is commonly
            associated with the broader idea of the "Internet of Things" (IoT)
            and smart systems. Smart Systems Integration as a cross-section
            technology opens up the possibility to harness physical effects -
            macro, micro, or nano. This applies to the design of new materials,
            such as nano-materials (CNTs) or nanopowder, as well as for the use
            of highly porous materials or functional surfaces.
          </span>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-5">
          <img
            src="https://www.iotallknow.com/wp-content/uploads/2022/11/%E6%99%BA%E8%83%BD%E7%81%8C%E6%BA%89%E7%9A%84%E5%BA%94%E7%94%A8%E5%AE%9E%E4%BE%8B.webp"
            alt="Smart Integration"
            className="w-full h-auto"
          />
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
}

export default Smart