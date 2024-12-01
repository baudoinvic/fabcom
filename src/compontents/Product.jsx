import React from 'react'
import { FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineDoneOutline } from "react-icons/md";

const Product = () => {
  return (
    <div data-aos="zoom-in" className="">
      <div className="" style={{ marginTop: "7rem" }}>
        <div class="flex flex-col-reverse lg:flex-row items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/1269045922/photo/two-graphic-designer-brainstorming-meeting-and-drawing-on-graphics-tablet-at-workplace.jpg?s=612x612&w=0&k=20&c=5WTdKfpEzVsiCQKotNzS5Bgd86VD78GyHBwI8F8vDkg="
            class="w-full lg:w-2/5 mt-8 lg:mt-0 rounded-lg"
          ></img>

          <div class="flex flex-col justify-left ml-0 lg:ml-12 mt-8 lg:mt-0">
            <span className="text-purple-800">WHY CHOOSE US</span>
            <h1 className="text-3xl mt-4">
              Driving Innovation At FabTech Hub{" "}
            </h1>
            <span className="mt-4">
              At FabTech Hub the innovation meets excellence! As a dynamic and
              forward-thinking technology company, we specialize in the seamless
              integration of hardware, software, and IoT solutions. Our Vision:
              At FabTech Hub, we envision a connected world where cutting-edge
              technology enhances the way we live, work, and interact. Our goal
              is to be at the forefront of this transformation, driving
              innovation through the convergence of hardware, software, and IoT.
              Expertise in Hardware Design: Our team of highly skilled hardware
              engineers is dedicated to crafting state-of-the-art devices that
              not only meet but exceed industry standards.{" "}
              <div className="mt-8 flex text-2xl">
                <MdOutlineDoneOutline className='text-purple-800' />
                <span className='ml-2'>Comprehensive Features</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex text-2xl mt-4">
                <MdOutlineDoneOutline className='text-purple-800' />
                <span className='ml-2'>User-Friendly Interface</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
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



   