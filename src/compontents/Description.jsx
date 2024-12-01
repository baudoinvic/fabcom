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

  import { GrIntegration } from "react-icons/gr";
  import { AiOutlineFieldTime } from "react-icons/ai";
  import { SiWebmoney } from "react-icons/si";
 
  import { LiaUikit } from "react-icons/lia";

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

      <div className="flex justify-between items-start ml-16 mr-16 mt-16">
        <div className="w-3/5">
          <div className="w-full">
            <div className="flex items-center mb-4">
              <IoDiamondOutline className="text-2xl mr-2" />
              <h1 className="text-2xl font-bold">Our Values</h1>
            </div>
            <p className="block mb-8 w-2/3">
              Excellence: We strive for excellence in all aspects of our
              operations, from the quality of our educational kits to the
              solutions we deliver to our clients. Innovation
            </p>
          </div>

          <div className="w-full">
            <div className="flex items-center mb-4">
              <PiPaperPlaneTiltBold className="text-2xl mr-2" />
              <h1 className="text-2xl font-bold">Our Vision</h1>
            </div>
            <span className="block mb-8 w-2/3">
              To be the premier provider of comprehensive educational kits for
              engineering schools, empowering the next generation of innovators,
              while delivering cutting-edge engineering solutions to businesses
              globally.
            </span>
          </div>

          <div className="w-full">
            <div className="flex items-center mb-4">
              <RiFocus2Line className="text-2xl mr-2" />
              <h1 className="text-2xl font-bold">Our Mission</h1>
            </div>
            <span className="block mb-8 w-2/3">
              Our mission is to revolutionize engineering education by offering
              dynamic educational kits that foster hands-on learning and
              practical skill development.
            </span>
          </div>
        </div>

        <img
          src="https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/about-us@300x-8.png"
          alt="About Us"
          className="w-2/5"
        />
      </div>

      <div class="white">
        <div class="flex items-center justify-center mt-16">
          <div class="p-8 text-center">
            <span class="font-bold block text-purple-800">WHAT WE OFFER</span>

            <h1 class="text-4xl font-bold mt-4">
              We Provide The Best Service For You
            </h1>

            <span class="block mt-2">
              Enjoy with our services which we provide for you and if you are
              interested don't hesitate to get in touch with us
            </span>
          </div>
        </div>
        <div data-aos="zoom-in" class="">
         
          <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
            <div class="bbg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
              <SiSimilarweb className="text-gray-600 text-4xl  mb-4" />
              <span className="text-xl font-bold mb-4 text-purple-800">
                Smart integration
              </span>
              <p className="text-gray-600">
                At FabTech Hub, we envision a connected world where cutting-edge
                technology enhances the way we live, work, and interact. Our
                goal is to be at the forefront of this transformation, driving
                innovation through the convergence of hardware, software, and
                IoT.
              </p>
            </div>

            <div class=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
              <GrIntegration className="text-gray-600 text-4xl mb-4" />
              <span className="text-xl font-bold mb-4 text-purple-800">
                Internet Of Things
              </span>
              <p className="text-gray-600">
                Our team of highly skilled hardware engineers is dedicated to
                crafting state-of-the-art devices that not only meet but exceed
                industry standards. From concept to prototype to final
                production, we leverage the latest technologies to design robust
                and efficient hardware solutions. We ensure that our hardware
                stands out in terms of performance
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3">
              <AiOutlineFieldTime className="text-gray-600 text-4xl mb-4" />
              <span className="text-xl font-bold mb-4 text-purple-800">
                Hardware Design
              </span>
              <p className="text-gray-600">
                Our team of highly skilled hardware engineers is dedicated to
                crafting state-of-the-art devices that not only meet but exceed
                industry standards. From concept to prototype to final
                production, we leverage the latest technologies to design robust
                and efficient hardware solutions. We ensure that our hardware
                stands out in terms of performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}

      <div data-aos="zoom-in" class="">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
            <SiWebmoney className="text-gray-600 text-4xl  mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Software development
            </span>
            <p className="text-gray-600">
              Elevate your online presence with our expert web development
              services at FabTech Hub. We are dedicated to creating seamless
              digital experiences that empower your business. From innovative
              designs to robust backend solutions, we specialize in crafting
              websites that not only meet but exceed your expectations.
            </p>
          </div>

          <div class=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
            <SiKasasmart className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Innovative Automatic
              <br /> Fare Collection Solutions
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

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3">
            <LiaUikit className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4 text-purple-800">
              Educational Kit
            </span>
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
    </div>
  );
};

export default Description;
