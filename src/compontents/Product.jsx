import React from 'react'
import { FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <span className="text-center text-lg md:text-2xl lg:text-3xl font-bold md:text-left">
          Ways of building great software
          <br className="hidden md:inline" /> and combining it with hardware
        </span>
      </div>

      <div className="" style={{ marginTop: "7rem" }}>
        <div class="flex flex-col lg:flex-row items-center justify-center">
          <div class="flex flex-col justify-left mr-10 lg:mr-0 lg:ml-12">
            <span class="block text-left text-3xl font-bold text-gray-800 mb-4">
              We Build the great software Product
            </span>
            <span class="text-gray-500 block text-left text-base mb-4 lg:mt-10">
              Our software product is meticulously crafted to meet the diverse
              needs of our users by
              <br class="hidden lg:inline" />
              ensuring seamless user experiences and We prioritize usability
              performance
              <br class="hidden lg:inline" />
              and security, ensuring that every feature aligns with our users’
              expectations.
              <br class="hidden lg:inline" />
              Our development team collaborates closely with designers, testers,
              and
              <br class="hidden lg:inline" />
              stakeholders to create a seamless experience
            </span>
          </div>

          <img
            src="https://media.istockphoto.com/id/1313264835/photo/young-confident-successful-business-people-discuss-and-analyze-work-statistics-plans-startup.jpg?s=612x612&w=0&k=20&c=DYw1ZIRfV5rxKGUoDh7IZ13qeMy7u7ijbjnHTrBOO3c="
            class="w-full lg:w-2/5 mt-8 lg:mt-0 ml-0 lg:ml-12 rounded-lg"
          ></img>
        </div>
      </div>
      <div className="" style={{ marginTop: "7rem" }}>
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/1269045922/photo/two-graphic-designer-brainstorming-meeting-and-drawing-on-graphics-tablet-at-workplace.jpg?s=612x612&w=0&k=20&c=5WTdKfpEzVsiCQKotNzS5Bgd86VD78GyHBwI8F8vDkg="
            class="w-full lg:w-2/5 mt-8 lg:mt-0 rounded-lg"
          ></img>

          <div class="flex flex-col justify-left ml-0 lg:ml-12 mt-8 lg:mt-0">
            <span class="block text-left text-3xl font-bold text-gray-800 mb-4">
              We design <br class="hidden lg:inline" />
              great Hardware
            </span>
            <span class="block text-left text-base text-gray-500 mb-4">
              Our team’s expertise lies in crafting innovative hardware
              solutions
              <br class="hidden lg:inline" />
              From intricate PCB designs to cutting-edge embedded systems
              <br class="hidden lg:inline" />
              we engineer solutions that redefine industry standards. Whether
              it’s IoT devices
              <br class="hidden lg:inline" />
              wearables, or industrial automation, our hardware is
              <br class="hidden lg:inline" />
              the backbone of technological progress
            </span>
          </div>
        </div>
      </div>
    

      <div className="ml-2 md:ml-10 mr-2 md:mr-10 p-8 md:p-20 flex flex-col md:flex-row items-start bg-gray-100 shadow-md rounded mt-4 md:mt-8">
        <span className="mr-6 md:w-1/2 md:mr-0 md:mt-0">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
            Get in touch for collaboration
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Hey there! This is the best way we can get in touch to collaborate
            on your new project. If you have any questions, feel free to reach
            out to us through our official email address or phone number. We're
            also active on various social media platforms, so connect with us on
            Facebook, Instagram, or LinkedIn. We look forward to hearing from
            you and exploring opportunities for collaboration.
          </p>
        </span>
        <Link to="/contact" className="flex items-center mt-4 md:mt-0 ml-auto">
          <button className="px-4 md:px-6 py-2 md:py-3 bg-purple-800 text-white font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Product



   