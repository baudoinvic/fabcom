import React from 'react'
import Navbar from '../Navbar'
 import { SiSimilarweb } from "react-icons/si";
 import { GrIntegration } from "react-icons/gr";
 import { AiOutlineFieldTime } from "react-icons/ai";
 import { SiWebmoney } from "react-icons/si";
 import { SiKasasmart } from "react-icons/si";
 import { LiaUikit } from "react-icons/lia";
import Footer from '../Footer';

const Ourservices = () => {
  return (
    <div class="">
      <Navbar />
      <div data-aos="zoom-in" class="relative">
        <img
          class="w-full object-cover shadow-md"
          style={{ height: "560px" }}
          src="https://fablab.rw/wp-content/uploads/2022/09/fablab-scaled.jpg"
          alt="Description"
        />

        <div class="absolute inset-0 flex flex-col items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 mt-24 md:mt-32">
          <button class="px-4 py-4 bg-[#02010130] text-white font-bold rounded hover:bg-black-100 md:mr-16 text-3xl">
            Our Services
          </button>
        </div>
      </div>

      <div data-aos="zoom-in" class="">
        <div class="flex justify-center items-center">
          <span class="text-center text-2xl font-bold mt-10">Services we offer</span>
        </div>
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class="border border-purple-800 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
            <SiSimilarweb className="text-gray-600 text-4xl  mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">Smart integration</span>
            <p className="text-gray-600">
              At FabTech Hub, we envision a connected world where cutting-edge
              technology enhances the way we live, work, and interact. Our goal
              is to be at the forefront of this transformation, driving
              innovation through the convergence of hardware, software, and IoT.
            </p>
          </div>

          <div class="border border-purple-800 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
            <GrIntegration className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">Internet Of Things</span>
            <p className="text-gray-600">
              Our team of highly skilled hardware engineers is dedicated to
              crafting state-of-the-art devices that not only meet but exceed
              industry standards. From concept to prototype to final production,
              we leverage the latest technologies to design robust and efficient
              hardware solutions. We ensure that our hardware stands out in
              terms of performance
            </p>
          </div>

          <div class="border border-purple-800 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3">
            <AiOutlineFieldTime className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Hardware Design
            </span>
            <p className="text-gray-600">
              Our team of highly skilled hardware engineers is dedicated to
              crafting state-of-the-art devices that not only meet but exceed
              industry standards. From concept to prototype to final production,
              we leverage the latest technologies to design robust and efficient
              hardware solutions. We ensure that our hardware stands out in
              terms of performance.
            </p>
          </div>
        </div>
      </div>

      {/* Second row */}
      <br />
      <div data-aos="zoom-in" class="">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class="border border-purple-800 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
            <SiWebmoney className="text-gray-600 text-4xl  mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">Software development</span>
            <p className="text-gray-600">
              Elevate your online presence with our expert web development
              services at FabTech Hub. We are dedicated to creating seamless
              digital experiences that empower your business. From innovative
              designs to robust backend solutions, we specialize in crafting
              websites that not only meet but exceed your expectations.
            </p>
          </div>

          <div class="border border-purple-800 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
            <SiKasasmart className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Innovative Automatic<br /> Fare Collection Solutions
            </span>
            <p className="text-gray-600">
              Experience cutting-edge automatic fare collection with our team of
              highly skilled hardware engineers at FabtechHub. We are committed
              to designing state-of-the-art devices that set new industry
              standards. From initial concept to prototype and final production,
              we harness the latest technologies to create robust and efficient
              hardware solutions for automatic fare collection systems.
            </p>
          </div>

          <div class="border border-purple-800 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3">
            <LiaUikit className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">Educational Kit</span>
            <p className="text-gray-600">
              Explore the world of learning with our team of highly skilled
              hardware engineers dedicated to creating cutting-edge educational
              kits. We go beyond industry standards, from the conceptualization
              phase to prototype development and final production. Leveraging
              the latest technologies, we design robust and efficient hardware
              solutions to enhance the educational experience.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Ourservices