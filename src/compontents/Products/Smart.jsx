import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';

const Smart = () => {
  return (
    <div>
      <Navbar />

      <div className="ml-10 mr-5">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          Smart Integration
        </h1>
      </div>

      <div className=" flex ml-10 mr-10 shadow-md">
        <div className="w-1/2">
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
            macro, micro or nano. This applies for the design of new materials,
            such as nano-materials (CNTs) or nanopowder, as well as for the use
            of highly porous materi- als or functional surfaces.
          </span>
        </div>
        <div className="w-1/2 ml-10">
          <img
            src="https://www.iotallknow.com/wp-content/uploads/2022/11/%E6%99%BA%E8%83%BD%E7%81%8C%E6%BA%89%E7%9A%84%E5%BA%94%E7%94%A8%E5%AE%9E%E4%BE%8B.webp"
            alt="Smart Integration"
            className="w-4/5 h-auto"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Smart