import React from "react";
import { SiSimilarweb } from "react-icons/si";
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
      <div className="pt-16 text-center px-4 md:px-0">
        <span className="mt-16 text-purple-800 font-bold block">
          WHO WE ARE
        </span>
        <h1 className="text-2xl md:text-3xl font-bold pt-4">
          Explore the Innovative Features With Us
        </h1>
        <p className="w-full md:w-1/2 mt-6 md:mt-10 text-center mx-auto">
          We provide technology where innovation meets excellence! As a dynamic
          and forward-thinking technology company, we specialize in the seamless
          integration of hardware, software, and IoT solutions. We envision a
          connected world where cutting-edge technology enhances the way we
          live, work, and interact.
        </p>
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-col md:flex-row justify-between items-start ml-4 md:ml-16 mr-4 md:mr-16 mt-8 md:mt-16 space-y-8 md:space-y-0"
      >
        <div className="w-full md:w-3/5">
          <div className="w-full">
            <div className="flex items-center mb-4">
              <IoDiamondOutline className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Values</h1>
            </div>
            <p className="block mb-8 w-full md:w-2/3">
              Excellence: We strive for excellence in all aspects of our
              operations, from the quality of our educational kits to the
              solutions we deliver to our clients. Innovation
            </p>
          </div>

          <div className="w-full">
            <div className="flex items-center mb-4">
              <PiPaperPlaneTiltBold className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Vision</h1>
            </div>
            <span className="block mb-8 w-full md:w-2/3">
              To be the premier provider of comprehensive educational kits for
              engineering schools, empowering the next generation of innovators,
              while delivering cutting-edge engineering solutions to businesses
              globally.
            </span>
          </div>

          <div className="w-full">
            <div className="flex items-center mb-4">
              <RiFocus2Line className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Mission</h1>
            </div>
            <span className="block mb-8 w-full md:w-2/3">
              Our mission is to revolutionize engineering education by offering
              dynamic educational kits that foster hands-on learning and
              practical skill development.
            </span>
          </div>
        </div>

        <img
          src="https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/about-us@300x-8.png"
          alt="About Us"
          className="w-full md:w-2/5 mx-auto md:mx-0"
        />
      </div>

      <div class="white">
        <div class="flex items-center justify-center mt-8 md:mt-16 px-4">
          <div class="p-4 md:p-8 text-center">
            <span class="font-bold block text-purple-800 text-sm md:text-base">
              WHAT WE OFFER
            </span>

            <h1 class="text-2xl md:text-4xl font-bold mt-4">
              We Provide The Best Service For You
            </h1>

            <span class="block mt-2 text-sm md:text-base">
              Enjoy our services, which we provide for you, and if you are
              interested, don't hesitate to get in touch with us.
            </span>
          </div>
        </div>

        <div data-aos="zoom-in" class="">
          <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
            <div class="bbg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
              <SiSimilarweb className=" text-1xl " />
              <span className="text-lg font-bold ">Smart integration</span>
              <p className="text-gray-600 text-sm mt-4">
                At FabTech Hub, we envision a connected world where cutting-edge
                technology enhances the way we live, work, and interact. Our
                goal is to be at the forefront of this transformation, driving
                innovation through the convergence of hardware, software, and
                IoT.
              </p>
            </div>

            <div class=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
              <GrIntegration className="text-gray-600 text-1xl " />
              <span className="text-lg font-bold  ">Internet Of Things</span>
              <p className="text-gray-600 mt-4 text-sm">
                Our team of highly skilled hardware engineers is dedicated to
                crafting state-of-the-art devices that not only meet but exceed
                industry standards. From concept to prototype to final
                production, we leverage the latest technologies to design robust
                and efficient hardware solutions. We ensure that our hardware
                stands out in terms of performance
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3">
              <AiOutlineFieldTime className=" text-1xl " />
              <span className="text-lg font-bold  ">Hardware Design</span>
              <p className="text-gray-600 mt-4 text-sm">
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
            <SiWebmoney className=" text-1xl " />
            <span className="text-lg font-bold  ">Software development</span>
            <p className="text-gray-600 mt-4 text-sm">
              Elevate your online presence with our expert web development
              services at FabTech Hub. We are dedicated to creating seamless
              digital experiences that empower your business. From innovative
              designs to robust backend solutions, we specialize in crafting
              websites that not only meet but exceed your expectations.
            </p>
          </div>

          <div class=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3 md:mb-4">
            <SiKasasmart className="text-1xl " />
            <span className="text-lg font-bold  ">
              Automatic Fare Collection Solutions
            </span>
            <p className="text-gray-600 mt-4 text-sm">
              Experience cutting-edge automatic fare collection with our team of
              highly skilled hardware engineers at FabtechHub. We are committed
              to designing state-of-the-art devices that set new industry
              standards. From initial concept to prototype and final production,
              we harness the latest technologies to create robust and efficient
              hardware solutions for automatic fare collection systems.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 md:w-1/3">
            <LiaUikit className=" text-1xl " />
            <span className="text-lg font-bold  ">Educational Kit</span>
            <p className="text-gray-600 mt-4 text-sm">
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
