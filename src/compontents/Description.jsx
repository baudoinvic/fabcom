import React from 'react'
import { FaEye, FaCog, FaHeart } from "react-icons/fa";
 import { PiLampBold } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { SiSimilarweb } from "react-icons/si";
 import { GrIntegration } from "react-icons/gr";
 import { AiOutlineFieldTime } from "react-icons/ai";
 import { SiWebmoney } from "react-icons/si";
 import { SiKasasmart } from "react-icons/si";
 import { LiaUikit } from "react-icons/lia";


const Description = () => {
  return (
    <div className="bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Who we are</h1>
        <p className="t text-gray-500 mx-auto max-w-2xl">
          Welcome to FabTechHub – the nexus of innovation where ideas transcend
          into tangible hardware solutions. As a premier tech company, we
          specialize in empowering visionaries to craft cutting-edge products in
          the realms of hardware and electronics. FabTechHub serves as a dynamic
          space, fostering creativity and collaboration. We go beyond
          traditional boundaries, providing a platform that seamlessly
          integrates hardware expertise with software knowledge, propelling our
          community into the forefront of the Internet of Things (IoT) era. Our
          mission is clear: to accelerate congolese innovators towards global
          competitiveness. Within our vibrant ecosystem, FabTechHub offers more
          than just workspace; it's a knowledge hub where skills are honed,
          ideas flourish, and collaborations thrive. We are committed to
          elevating congolese standing in Design, Engineering, Electronics,
          Fabrication, and High-Tech innovation. We provide not only the
          collaborative space but also a knowledge base and expert guidance. Our
          approach extends beyond the individual, shaping a community that
          collectively pushes the boundaries of what's possible. We aspire to be
          a beacon of inspiration, not just within our community but also for
          national leaders in policy, government, and industry. FabTechHub is
          not just a space; it's a testament to the grassroots approach in
          developing technical education, promoting innovation, and transforming
          traditional industries into digital fabrication leaders. Join us at
          FabTechHub, where innovation meets collaboration, and ideas transform
          into reality. Together, let's shape the future of technology.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-10">
        <div className="bg-white p-6 rounded-lg shadow-md  transition-transform transform hover:scale-105 cursor-pointer">
          <FaEye className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Vision</span>
          <p className="text-gray-500">
            At FabTech Hub, we envision a connected world where cutting-edge
            technology enhances the way we live, work, and interact. Our goal is
            to be at the forefront of this transformation, driving innovation
            through the convergence of hardware, software, and IoT.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <FaCog className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Value</span>
          <p className="text-gray-500">
            Our team of highly skilled hardware engineers is dedicated to
            crafting state-of-the-art devices that not only meet but exceed
            industry standards. From concept to prototype to final production we
            leverage the latest technologies to design robust and efficient
            hardware solutions. We ensure that our hardware stands out in terms
            of performance, durability, and user experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <PiLampBold className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Mission</span>
          <p className="text-gray-500">
            Our team of highly skilled hardware engineers is dedicated to
            crafting state-of-the-art devices that not only meet but exceed
            industry standards. From concept to prototype to final production we
            leverage the latest technologies to design robust and efficient
            hardware solutions. We ensure that our hardware stands out in terms
            of performance, durability, and user experience.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <span class="block text-center text-lg mb-4">FabTechhub services</span>
        <span class="block text-center text-lg mt-4 font-bold">
          Our services
        </span>
      </div>

      <div class="bg-gray-100">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class="p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <SiSimilarweb className="text-gray-600 text-4xl  mb-4" />
            <span className="text-xl font-bold mb-4">Smart integration</span>
            <p className="text-gray-600">
              At FabTech Hub, we envision a connected world where cutting-edge
              technology enhances the way we live, work, and interact. Our goal
              is to be at the forefront of this transformation, driving
              innovation through the convergence of hardware, software, and IoT.
            </p>
          </div>

          <div class="p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
            <GrIntegration className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4">Internet Of Things</span>
            <p className="text-gray-600">
              Our team of highly skilled hardware engineers is dedicated to
              crafting state-of-the-art devices that not only meet but exceed
              industry standards. From concept to prototype to final production,
              we leverage the latest technologies to design robust and efficient
              hardware solutions. We ensure that our hardware stands out in
              terms of performance
            </p>
          </div>

          <div class="p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <AiOutlineFieldTime className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4">
              Network deployment and design
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

      <div class="bg-gray-100">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class=" p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
            <SiWebmoney className="text-gray-600 text-4xl  mb-4" />
            <span className="text-xl font-bold mb-4">Web development</span>
            <p className="text-gray-600">
              Elevate your online presence with our expert web development
              services at FabTech Hub. We are dedicated to creating seamless
              digital experiences that empower your business. From innovative
              designs to robust backend solutions, we specialize in crafting
              websites that not only meet but exceed your expectations.
            </p>
          </div>

          <div class=" p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <SiKasasmart className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4">
              Innovative Automatic Fare Collection Solutions
            </span>
            <p className="text-gray-600">
              Experience cutting-edge automatic fare collection with our team of
              highly skilled hardware engineers at FabtechHub. We are committed
              to designing state-of-the-art devices that set new industry
              standards. From initial concept to prototype and final production,
              we harness the latest technologies to create robust and efficient
              hardware solutions .
            </p>
          </div>

          <div class=" p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
            <LiaUikit className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4">Educational Kit</span>
            <p className="text-gray-600">
              Explore the world of learning with our team of highly skilled
              hardware engineers dedicated to creating cutting-edge educational
              kits. We go beyond industry standards, from the conceptualization
              phase to prototype development and final production. Leveraging
              the latest technologies, we design robust and efficient hardware
              solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description