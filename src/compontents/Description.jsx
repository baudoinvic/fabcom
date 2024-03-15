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
    <div className="">
      <div
        class="flex items-center justify-center"
        style={{ marginTop: "8rem" }}
      >
        <div class="flex flex-col justify-left mr-10">
          <h2 class=" text-left text-4xl text-purple-800  mb-4 lg:ml-12">
            WH0 WE ARE
          </h2>
          <span class="block text-left text-3xl font-bold text-gray-800 mb-4 lg:ml-12">
            We Help To Innovate
          </span>
          <span class="block text-left text-base mb-4 lg:ml-12 lg:mt-10">
            We provide technology where innovation meets excellence! As a
            dynamic <br /> and forward-thinking technology company, we
            specialize in the seamless integration <br /> of hardware, software,
            and IoT solutions. And we envision a connected world where <br />{" "}
            cutting-edge technology enhances the way we live, work, and
            interact.
          </span>
          <Link to="/about">
            <span className="flex items-center ml-10 text-lg text-gray-800">
              <span className="mr-2 text-purple-800">See more information</span>
              <FaArrowRight size={20} className="text-purple-800" />
            </span>
          </Link>
        </div>

        <img
          src="https://media.istockphoto.com/id/1422478091/photo/close-up-of-a-hands-on-a-laptop-keyboard.jpg?s=612x612&w=0&k=20&c=TNGJooImQwsqodIC8vZB4e0r60RN989t0H9lmBmz60Y="
          class="w-full lg:w-2/5 mt-8  ml-12 lg:mt-0 rounded-lg"
        ></img>
      </div>

      <div class="bg-white">
        <div class="p-8 ml-10">
          <span class="text-4xl font-bold block">What we do</span>
          <br />
          <span class="text-lg ">
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
              coporate clients ensuring budget-friendly solutions 
              compromising
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
              of  businesses.
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
