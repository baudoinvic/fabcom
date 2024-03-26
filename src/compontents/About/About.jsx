import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaEye, FaCog, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="bg-gray-100">
      <Navbar />
      <div data-aos="zoom-in" class="relative">
        <img
          class="w-full object-cover opacity-80 "
          style={{ height: "560px" }}
          src="https://fablab.rw/wp-content/uploads/2022/09/fablab-scaled.jpg"
          alt="Description"
        />

        <div class="absolute inset-0 flex flex-col items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 mt-24 md:mt-32">
          <button class="px-4 py-4 bg-[#02010130] text-white font-bold rounded hover:bg-black-100 md:mr-16 text-3xl">
            About Us
          </button>
        </div>
      </div>
      <div data-aos="zoom-in" class="flex flex-col md:flex-row md:mr-3 md:ml-3 md:mt-20 ml-10 mr-10 ">
        <div class="w-full md:w-1/2 p-8">
          <h1 class="text-purple-800 text-3xl font-bold mb-4">
            About FabtechHub
          </h1>
          <br />
          <p class="mb-4 text-base text-gray-500">
            <span className="text-purple-800">At FabTech Hub</span> the
            innovation meets excellence! As a dynamic and forward-thinking
            technology company, we specialize in the seamless integration of
            hardware, software, and IoT solutions. Our Vision: At FabTech Hub,
            we envision a connected world where cutting-edge technology enhances
            the way we live, work, and interact. Our goal is to be at the
            forefront of this transformation, driving innovation through the
            convergence of hardware, software, and IoT. Expertise in Hardware
            Design: Our team of highly skilled hardware engineers is dedicated
            to crafting state-of-the-art devices that not only meet but exceed
            industry standards. From concept to prototype to final production,
            we leverage the latest technologies to design robust and efficient
            hardware solutions. We ensure that our hardware stands out in terms
            of performance, durability, and user experience.
          </p>

          <p class="mb-4 text-base text-gray-500">
            we take pride in our software development prowess. Our team of
            software engineers is adept at creating custom applications,
            firmware, and operating systems that seamlessly integrate with our
            hardware offerings. We believe in user-centric design, ensuring that
            our software solutions are not only powerful but also intuitive and
            user-friendly. Innovative IoT Solutions: The Internet of Things
            (IoT) has revolutionized the way devices communicate and interact.
            At FabTech Hub, we harness the potential of IoT to create
            intelligent and connected ecosystems.
          </p>
        </div>

        <div
          class="w-full md:w-1/2 mt-7 flex justify-center items-center"
          style={{ marginTop: "-2rem" }}
        >
          <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <video
              controls
              class="w-full h-full object-cover rounded-xl "
              width="full"
              height="560"
              border-radius="40"
            >
              <source src="/anima.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-10 bg-white">
        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-800 transition-transform transform hover:scale-105 cursor-pointer">
          <FaEye className="text-purple-800 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4 text-purple-800">
            Our Vision
          </span>
          <p className="text-gray-500">
            To be the premier provider of comprehensive educational kits for
            engineering schools, empowering the next generation of innovators,
            while delivering cutting-edge engineering solutions to businesses
            globally. Our commitment extends beyond mere products; we strive to
            foster a culture of creativity, critical thinking, and collaboration
            ensuring that students and professionals alike are equipped with the
            skills and knowledge needed to thrive in an ever-evolving
            technological landscape.
          </p>
        </div>

        <div className="border border-purple-800 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <FaCog className="text-purple-800 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4 text-purple-800">
            Our Value
          </span>
          <p className="text-gray-500">
            Excellence: We strive for excellence in all aspects of our
            operations, from the quality of our educational kits to the
            solutions we deliver to our clients. Innovation: We embrace
            innovation as the driving force behind progress, continuously
            seeking new and creative ways to enhance engineering education and
            solve complex challenges for our clients. Integrity: We uphold the
            highest standards of integrity in everything we do, fostering trust
            and transparency with our customers, partners, and employees.
          </p>
        </div>

        <div className="border border-purple-800 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <FaHeart className="text-purple-800 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4 text-purple-800">
            Our Mission
          </span>
          <p className="text-gray-500">
            Our mission is to revolutionize engineering education by offering
            dynamic educational kits that foster hands-on learning and practical
            skill development. Simultaneously, we are committed to providing
            top-tier engineering support to companies, specializing in web
            design, re design, and Internet of Things solutions. Through
            innovation, expertise, and a dedication to excellence, we aim to
            empower both students and businesses to thrive in a rapidly evolving
            technological landscape.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
