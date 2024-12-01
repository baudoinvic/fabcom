import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoHardwareChipOutline } from "react-icons/io5";
import { SiSimilarweb } from "react-icons/si";
import { Link } from "react-router-dom";
import { BiNetworkChart } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
 import { SiKasasmart } from "react-icons/si";

const Description = () => {
  return (
    <div data-aos="zoom-in" className="">
      {/* <div
        className="flex flex-col md:flex-row items-center justify-center mt-8 md:"
        style={{ marginTop: "10rem" }}
      >
        <div className="w-full md:w-1/2 max-w-screen-xl md:ml-10">
          <h2 className="text-left text-4xl md:text-4xl text-purple-800 mb-4 md:mb-8 md:ml-12">
            WHO WE ARE
          </h2>
          <span className="block text-left text-3xl font-bold text-gray-800 mb-4 md:ml-12">
            We Help To Innovate
          </span>
          <p className="text-base md:text-lg leading-relaxed mt-4 md:ml-12 md:mt-10">
            We provide technology where innovation meets excellence! As a
            dynamic and forward-thinking technology company, we specialize in
            the seamless integration of hardware, software, and IoT solutions.
            We envision a connected world where cutting-edge technology enhances
            the way we live, work, and interact.
          </p>

          <Link
            to="/about"
            className="flex items-center ml-0 md:ml-10 text-lg text-gray-800"
          >
            <span className="mr-2 text-purple-800">See more information</span>
            <FaArrowRight size={20} className="text-purple-800" />
          </Link>
        </div>

       
      </div> */}

       <div className="">
        
       </div>

      <div class="bg-white">
        <div class="p-8 ml-0 md:ml-10">
          <span class="text-4xl font-bold block">What we do</span>
          <br />
          <span class="text-lg">
            We design hardwares and innovate the youth
          </span>
        </div>

        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-7  ">
          <div class="h-48 bg-white shadow-md p-6 rounded-lg border border-purple-800 transition-transform transform hover:scale-105 cursor-pointer">
            <IoHardwareChipOutline className="text-2xl text-purple-800" />
            <span class="text-xl font-bold mb-4 text-purple-800">
              Hardware Design
            </span>
            <p class="text-gray-600 mt-5">
              We provide comprehensive hardware design services
              <br /> ensuring the swift and efficient resolution
            </p>
          </div>

          <div class="h-48 bg-white shadow-md p-6 rounded-lg border border-purple-800 transition-transform transform hover:scale-105 cursor-pointer">
            <SiSimilarweb className="text-2xl text-purple-800" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Web Development
            </span>
            <p className="text-gray-600 mt-5">
              we provide the best of solutions of software development
              <br />
              mostly we do web applications and mobile apps for our clients
            </p>
          </div>

          <div class="h-48 bg-white shadow-md p-6  rounded-lg border border-purple-800 transition-transform transform hover:scale-105 cursor-pointer">
            <BiNetworkChart className="text-2xl text-purple-800" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Network Deployment <br /> and Design
            </span>
            <p className="text-gray-600 mt-5">
              Our network support services offer comprehensive assistance
              <br /> to optimize your network
            </p>
          </div>
        </div>
      </div>

      {/* Second row */}

      <div class="bg-white">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class="h-48 bg-white shadow-md p-6 rounded-lg border border-purple-800 transition-transform transform hover:scale-105 cursor-pointer">
            <FaLaptopCode className="text-2xl text-purple-800" />
            <span className="text-xl font-bold mb-4 text-purple-800 ">
              Internet of things
            </span>
            <p className="text-gray-600 mt-5">
              We offer affrodable laptop repair services to indivudual and
              coporate clients ensuring budget-friendly solutions compromising
            </p>
          </div>

          <div class="h-48 bg-white shadow-md p-6 rounded-lg border border-purple-800 transition-transform transform hover:scale-105 cursor-pointer">
            <FaCloudUploadAlt className="text-2xl text-purple-800" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Educational kit
            </span>
            <p className="text-gray-600 mt-5">
              A perfect way to store your data, our cloud services provide
              secure and reliable storage solutions designed to meet the demands
              of businesses.
            </p>
          </div>

          <div class="h-48 bg-white shadow-md p-6 rounded-lg border border-purple-800 transition-transform transform hover:scale-105 cursor-pointer">
            <SiKasasmart className="text-2xl text-purple-800" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Smart integration
            </span>
            <p className="text-gray-600 mt-5">
              Seamless integration is key to our approach as we tailor smart
              solutions to seamlessly integrate with your existing systems
              performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
