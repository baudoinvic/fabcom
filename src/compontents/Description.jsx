import React from "react";
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
      {/* <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800"></h1>
        <p className="text-gray-500 mx-auto max-w-2xl leading-relaxed">
          Welcome to FabTechHub – the nexus of innovation where ideas transcend
          into tangible hardware solutions. As a premier tech company, we
          specialize in empowering visionaries to craft cutting-edge products in
          the realms of hardware and electronics.
          <br />
          <br />
          FabTechHub serves as a dynamic space, fostering creativity and
          collaboration. We go beyond traditional boundaries, providing a
          platform that seamlessly integrates hardware expertise with software
          knowledge, propelling our community into the forefront of the Internet
          of Things
          <br />
          <br />
          Our mission is clear: to accelerate Congolese innovators towards
          global competitiveness. Within our vibrant ecosystem, FabTechHub
          offers more than just workspace; it's a knowledge hub where skills are
          honed, ideas flourish, and collaborations thrive.
          <br />
          <br />
          We are committed to elevating Congolese standing in Design,
          Engineering, Electronics, Fabrication, and High-Tech innovation. We
          provide not only the collaborative space but also a knowledge base and
          expert guidance.
          <br />
          <br />
        </p>
      </div> */}

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-10">
        <div className="bg-white p-6 rounded-lg shadow-md  transition-transform transform hover:scale-105 cursor-pointer">
          <FaEye className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Vision</span>
          <p className="text-gray-500">
            To be the premier provider of comprehensive educational kits for
            engineering schools, empowering the next generation of innovators,
            while delivering cutting-edge engineering solutions to businesses
            globally.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <FaCog className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Value</span>
          <p className="text-gray-500">
            Excellence: We strive for excellence in all aspects of our
            operations, from the quality of our educational kits to the
            solutions we deliver to our clients. Innovation: We embrace
            innovation as the driving force behind progress, continuously
            seeking new and creative ways to enhance engineering education and
            solve complex challenges for our clients. Integrity: We uphold the
            highest standards of integrity in everything we do, fostering trust
            and transparency with our customers, partners, and employees.
            Collaboration: We believe in the power of collaboration, working
            closely with engineering schools, students, and businesses to
            achieve mutual success and innovation. Continuous Learning: We
            promote a culture of continuous learning and improvement,
            recognizing that knowledge and skills are essential assets in a
            rapidly evolving technological landscape. Customer Centricity: We
            are dedicated to understanding and exceeding the needs of our
            customers, delivering tailored solutions and exceptional service
            that drive value and satisfaction. Social Responsibility: We are
            committed to making a positive impact on society and the
            environment, leveraging our resources and expertise to contribute to
            a sustainable future.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <PiLampBold className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Mission</span>
          <p className="text-gray-500">
            Our mission is to revolutionize engineering education by offering
            dynamic educational kits that foster hands-on learning and practical
            skill development. Simultaneously, we are committed to providing
            top-tier engineering support to companies, specializing in web
            design, hardware design, and Internet of Things solutions. Through
            innovation, expertise, and a dedication to excellence, we aim to
            empower both students and businesses to thrive in a rapidly evolving
            technological landscape.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <span class="block text-center text-3xl font-bold mb-6 text-gray-800">
          FabTechhub services
        </span>
        <span class="block text-center text-2xl mt-4 ">Our services</span>
      </div>

      <div class="bg-gray-100 ">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10  ">
          <div class="bg-white shadow-md p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
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

          <div class="bg-white shadow-md p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
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

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
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
          <div class="bg-white shadow-md p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
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

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
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

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer ">
            <SiSimilarweb className="text-gray-600 text-4xl  mb-4" />
            <span className="text-xl font-bold mb-4">Smart integration</span>
            <p className="text-gray-600">
              At FabTech Hub, we envision a connected world where cutting-edge
              technology enhances the way we live, work, and interact. Our goal
              is to be at the forefront of this transformation, driving
              innovation through the convergence of hardware, software, and IoT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
