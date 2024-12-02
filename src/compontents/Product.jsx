import React from 'react'
import { FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineDoneOutline } from "react-icons/md";

const Product = () => {
  return (
    <div data-aos="zoom-in" className="">
      <div
         className="relative h-[400px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "url(https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/iot-coverage-2.jpg?rev=4fa2eb28f841448c9d126f911019398f)",
          backgroundOpacity: "0.4",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl font-bold">
            FabTech Hub is only as powerful as
            <br /> the innovators behind it.
          </h1>
          <p className="mt-4 text-base w-2/4">
            Empowering progress through technology and creativity, our mission
            is to redefine financial services with groundbreaking ideas and
            solutions. Join us in shaping the future of FabTech Hub.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-800 text-white font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out">
            Discover More
          </button>
        </div>
      </div>

      <div data-aos="zoom-in" className="mt-16 px-4 lg:px-0 mb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <img
            src="https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/Macbook-Pro-M1-Front-Mockup-01.png"
            className="w-full lg:w-2/5 rounded-lg shadow-lg"
            alt="MacBook Pro Mockup"
          />

          {/* Content Section */}
          <div className="lg:w-1/2 text-left">
            <span className="text-purple-800 font-semibold uppercase tracking-wide">
              Why Choose Us
            </span>
            <h1 className="text-4xl font-bold mt-4 text-gray-800 leading-tight">
              Driving Innovation At FabTech Hub
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At FabTech Hub, innovation meets excellence! As a dynamic and
              forward-thinking technology company, we specialize in the seamless
              integration of hardware, software, and IoT solutions.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our vision is to create a connected world where cutting-edge
              technology enhances the way we live, work, and interact. Our goal
              is to lead this transformation by driving innovation through the
              convergence of hardware, software, and IoT.
            </p>

            {/* Feature List */}
            <div className="mt-8">
              <div className="flex items-start text-2xl">
                <MdOutlineDoneOutline className="text-purple-800 mt-1" />
                <div className="ml-4">
                  <h2 className="font-semibold text-gray-800">
                    Comprehensive Features
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Explore a suite of robust tools and capabilities designed to
                    meet your needs, enhance efficiency, and deliver exceptional
                    results.
                  </p>
                </div>
              </div>
              <div className="flex items-start text-2xl mt-6">
                <MdOutlineDoneOutline className="text-purple-800 mt-1" />
                <div className="ml-4">
                  <h2 className="font-semibold text-gray-800">
                    User-Friendly Interface
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Designed with simplicity and efficiency in mind, our
                    interface ensures seamless navigation and an intuitive
                    experience, making it easy for everyone to achieve their
                    goals effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product



   