import React from 'react'
import Navbar from '../Navbar'
 import { IoDiamondOutline } from "react-icons/io5";
 import { PiPaperPlaneTiltBold } from "react-icons/pi";
 import { RiFocus2Line } from "react-icons/ri";
import Footer from '../Footer';

const Mission = () => {
  return (
    <div>
      <Navbar />
    

      <div
        data-aos="zoom-in"
        className="flex flex-col lg:flex-row justify-between items-start mx-4 md:mx-16 mt-8 md:mt-16 mb-8 md:mb-16"
      >
        {/* Content Section */}
        <div className="w-full lg:w-3/5 space-y-8">
          {/* Our Values */}
          <div className="w-full">
            <div className="flex items-center mb-4">
              <IoDiamondOutline className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Values</h1>
            </div>
            <p className="block text-sm md:text-base leading-relaxed">
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

          {/* Our Vision */}
          <div className="w-full">
            <div className="flex items-center mb-4">
              <PiPaperPlaneTiltBold className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Vision</h1>
            </div>
            <p className="block text-sm md:text-base leading-relaxed">
              To be the premier provider of comprehensive educational kits for
              engineering schools, empowering the next generation of innovators,
              while delivering cutting-edge engineering solutions to businesses
              globally. Our commitment extends beyond mere products; we strive
              to foster a culture of creativity, critical thinking, and
              collaboration ensuring that students and professionals alike are
              equipped with the skills and knowledge needed to thrive in an
              ever-evolving technological landscape.
            </p>
          </div>

          {/* Our Mission */}
          <div className="w-full">
            <div className="flex items-center mb-4">
              <RiFocus2Line className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Mission</h1>
            </div>
            <p className="block text-sm md:text-base leading-relaxed">
              Our mission is to revolutionize engineering education by offering
              dynamic educational kits that foster hands-on learning and
              practical skill development. Simultaneously, we are committed to
              providing top-tier engineering support to companies, specializing
              in web design, redesign, and Internet of Things solutions. Through
              innovation, expertise, and a dedication to excellence, we aim to
              empower both students and businesses to thrive in a rapidly
              evolving technological landscape.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-2/5 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/about-us@300x-8.png"
            alt="About Us"
            className="w-full md:w-4/5 lg:w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mission
