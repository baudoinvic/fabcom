import React from 'react'
import Navbar from '../Navbar'
 import { IoDiamondOutline } from "react-icons/io5";
 import { PiPaperPlaneTiltBold } from "react-icons/pi";
 import { RiFocus2Line } from "react-icons/ri";

const Mission = () => {
  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default Mission
