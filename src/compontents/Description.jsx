import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoHardwareChipOutline } from "react-icons/io5";
import { SiSimilarweb } from "react-icons/si";
import { Link } from "react-router-dom";
import { BiNetworkChart } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
 import { SiKasasmart } from "react-icons/si";
 import { IoDiamondOutline } from "react-icons/io5";
 import { PiPaperPlaneTiltBold } from "react-icons/pi";
 import { RiFocus2Line } from "react-icons/ri";

const Description = () => {
  return (
    <div data-aos="zoom-in" className="">
      <div className="pt-32 text-center">
        <span className="pt-16 text-purple-800 font-bold ">WHO WE ARE</span>
        <h1 className="text-3xl font-bold pt-4">
          Explore the Innovative Features With Us
        </h1>
        <p className="w-1/2 mt-10 text-center mx-auto">
          We provide technology where innovation meets excellence! As a dynamic
          and forward-thinking technology company, we specialize in the seamless
          integration of hardware, software, and IoT solutions. We envision a
          connected world where cutting-edge technology enhances the way we
          live, work, and interact.
        </p>
      </div>

      <div className="ml-16 mt-16">
        <div className="w-2/5">
          <div className="flex">
            <IoDiamondOutline />
            <h1>Our Values</h1>
          </div>

          <p>
            Excellence: We strive for excellence in all aspects of our
            operations, from the quality of our educational kits to the
            solutions we deliver to our clients. Innovation
          </p>
        </div>
        <div className="w-2/5 pt-8">
          <div className="flex">
            <PiPaperPlaneTiltBold />
            <h1>Our Vision</h1>
          </div>

          <span>
            To be the premier provider of comprehensive educational kits for
            engineering schools, empowering the next generation of innovators,
            while delivering cutting-edge engineering solutions to businesses
            globally.{" "}
          </span>
        </div>
        <div className="w-2/4 pt-8">
          <div className="flex">
            <RiFocus2Line />
            <h1>Our Mission</h1>
          </div>

          <span>
            Our mission is to revolutionize engineering education by offering
            dynamic educational kits that foster hands-on learning and practical
            skill development.
          </span>
        </div>
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
