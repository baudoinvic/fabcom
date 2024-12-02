import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
 import { IoDiamondOutline } from "react-icons/io5";
 import { PiPaperPlaneTiltBold } from "react-icons/pi";
  import { RiFocus2Line } from "react-icons/ri";

const About = () => {
  return (
    <div class="">
      <Navbar />
      <div className="pt-32 text-center">
        <span className="pt-16 text-purple-800 font-bold ">WHO WE ARE</span>
        <h1 className="text-3xl font-bold pt-4">About FabtechHub</h1>
        <p className="w-1/2 mt-10 text-center mx-auto">
          At FabtechHub innovation meets excellence! As a dynamic and
          forward-thinking technology company, we specialize in the seamless
          integration of hardware, software, and IoT solutions. Our Vision: At
          FabTech Hub, we envision a connected world where cutting-edge
          technology enhances the way we live, work, and interact. Our goal is
          to be at the forefront of this transformation, driving innovation
          through the convergence of hardware, software, and IoT. Expertise in
          Hardware Design: Our team of highly skilled hardware engineers is
          dedicated to crafting state-of-the-art devices that not only meet but
          exceed industry standards. From concept to prototype to final
          production, we leverage the latest technologies to design robust and
          efficient hardware solutions. We ensure that our hardware stands out
          in terms of performance, durability, and user experience.
        </p>
        <p className="w-1/2 mt-10 text-center mx-auto">
          we take pride in our software development prowess. Our team of
          software engineers is adept at creating custom applications, firmware,
          and operating systems that seamlessly integrate with our hardware
          offerings. We believe in user-centric design, ensuring that our
          software solutions are not only powerful but also intuitive and
          user-friendly. Innovative IoT Solutions: The Internet of Things (IoT)
          has revolutionized the way devices communicate and interact. At
          FabTech Hub, we harness the potential of IoT to create intelligent and
          connected ecosystems.
        </p>
      </div>

      <div
        data-aos="zoom-in"
        className="flex justify-between items-start ml-16 mr-16 mt-16 mb-16"
      >
        <div className="w-3/5">
          <div className="w-full">
            <div className="flex items-center mb-4">
              <IoDiamondOutline className="text-2xl mr-2 text-purple-800" />
              <h1 className="text-2xl font-bold">Our Values</h1>
            </div>
            <p className="block mb-8 w-2/3">
              Excellence: We strive for excellence in all aspects of our
              operations, from the quality of our educational kits to the
              solutions we deliver to our clients. Innovation: We embrace
              innovation as the driving force behind progress, continuously
              seeking new and creative ways to enhance engineering education and
              solve complex challenges for our clients. Integrity: We uphold the
              highest standards of integrity in everything we do, fostering
              trust and transparency with our customers, partners, and
              employees.
            </p>
          </div>

          <div className="w-full">
            <div className="flex items-center mb-4">
              <PiPaperPlaneTiltBold className="text-2xl mr-2 text-purple-800" />
              <h1 className="text-2xl font-bold">Our Vision</h1>
            </div>
            <span className="block mb-8 w-2/3">
              To be the premier provider of comprehensive educational kits for
              engineering schools, empowering the next generation of innovators,
              while delivering cutting-edge engineering solutions to businesses
              globally. Our commitment extends beyond mere products; we strive
              to foster a culture of creativity, critical thinking, and
              collaboration ensuring that students and professionals alike are
              equipped with the skills and knowledge needed to thrive in an
              ever-evolving technological landscape.
            </span>
          </div>

          <div className="w-full">
            <div className="flex items-center mb-4">
              <RiFocus2Line className="text-2xl mr-2 text-purple-800" />
              <h1 className="text-2xl font-bold">Our Mission</h1>
            </div>
            <span className="block mb-8 w-2/3">
              Our mission is to revolutionize engineering education by offering
              dynamic educational kits that foster hands-on learning and
              practical skill development. Simultaneously, we are committed to
              providing top-tier engineering support to companies, specializing
              in web design, re design, and Internet of Things solutions.
              Through innovation, expertise, and a dedication to excellence, we
              aim to empower both students and businesses to thrive in a rapidly
              evolving technological landscape.
            </span>
          </div>
        </div>

        <img
          src="https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/about-us@300x-8.png"
          alt="About Us"
          className="w-2/5"
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
