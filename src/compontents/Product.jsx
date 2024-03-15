import React from 'react'
import { FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <span className="text-center text-2xl font-bold">
          Ways of building great software
          <br /> and combining it with hardware
        </span>
      </div>
      <div className="" style={{ marginTop: "7rem" }}>
        <div class="flex items-center justify-center">
          <div class="flex flex-col justify-left mr-10">
            <span class="block text-left text-3xl font-bold text-gray-800 mb-4 lg:ml-12">
              Build the great software
            </span>
            <span class="text-gray-500 block text-left text-base mb-4 lg:ml-12 lg:mt-10">
              We provide technology where innovation meets excellence! As a
              dynamic <br /> and forward-thinking technology company, we
              specialize in the seamless integration <br /> of hardware,
              software, and IoT solutions. And we envision a connected world
              where <br /> cutting-edge technology enhances the way we live,
              work, and interact.
            </span>
          </div>

          <img
            src="https://media.istockphoto.com/id/1313264835/photo/young-confident-successful-business-people-discuss-and-analyze-work-statistics-plans-startup.jpg?s=612x612&w=0&k=20&c=DYw1ZIRfV5rxKGUoDh7IZ13qeMy7u7ijbjnHTrBOO3c="
            class="w-full lg:w-2/5 mt-8  ml-12 lg:mt-0 rounded-lg"
          ></img>
        </div>
      </div>

      <div className="" style={{ marginTop: "7rem" }}>
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/1269045922/photo/two-graphic-designer-brainstorming-meeting-and-drawing-on-graphics-tablet-at-workplace.jpg?s=612x612&w=0&k=20&c=5WTdKfpEzVsiCQKotNzS5Bgd86VD78GyHBwI8F8vDkg="
            class="w-full lg:w-2/5 mt-8 lg:mt-0 rounded-lg"
          ></img>

          <div class="flex flex-col justify-left ml-10 lg:ml-12">
            <span class="block text-left text-3xl font-bold text-gray-800 mb-4">
              We are the Expert <br />
              for designing Hardwares
            </span>
            <span class="block text-left text-base text-gray-500 mb-4">
              We provide technology where innovation meets excellence! As a
              dynamic
              <br /> and forward-thinking technology company, we specialize in
              the seamless integration <br /> of hardware, software, and IoT
              solutions. And we envision a connected world
              <br /> where cutting-edge technology enhances the way we live,
              work, and interact.
            </span>
          </div>
        </div>
      </div>

      <div
        className="ml-10 mr-10 p-20 flex flex-col md:flex-row items-start bg-gray-100 shadow-md rounded"
        style={{ marginTop: "4rem" }}
      >
        <span
          className="mr-6 text-gray-600 md:mr-0 md:w-1/2"
          style={{ marginTop: "-2rem" }}
        >
          <span className="text-3xl font-bold text-gray-800 mb-4">
            Get in touch for collaboration
          </span>
          <br />
          <br />
          Hey there! This is the best way we can get in touch to collaborate on
          your new project.
          <br />
          If you have any questions, feel free to reach out to us through our
          official email address or phone number. We're also active on various
          social media platforms, so connect with us on Facebook, Instagram, or
          LinkedIn. We look forward to hearing from you and exploring
          opportunities for collaboration
        </span>
        <Link to="/contact">
          <button className="px-6 py-3 md:ml-40 mt-4 md:mt-0 bg-purple-800 text-white font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Product



   