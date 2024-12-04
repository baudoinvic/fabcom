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
        className="flex flex-col lg:grid lg:grid-cols-2 gap-12 mx-4 md:mx-16 mt-8 md:mt-16 mb-8 md:mb-16"
      >
        {/* Text Content */}
        <div className="space-y-8 max-w-2xl">
          {/* Our Values */}
          <div>
            <div className="flex items-center mb-4">
              <IoDiamondOutline className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Values</h1>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
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
          <div>
            <div className="flex items-center mb-4">
              <PiPaperPlaneTiltBold className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Vision</h1>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              To be the premier provider of comprehensive educational kits for
              engineering schools, empowering the next generation of innovators
              while delivering cutting-edge engineering solutions to businesses
              globally.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <div className="flex items-center mb-4">
              <RiFocus2Line className="text-xl md:text-2xl mr-2 text-purple-800" />
              <h1 className="text-xl md:text-2xl font-bold">Our Mission</h1>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Our mission is to revolutionize engineering education by offering
              dynamic educational kits that foster hands-on learning and
              practical skill development. Simultaneously, we are committed to
              providing top-tier engineering support to companies through
              innovation and expertise.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center  ">
          <img
            src="https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/about-us@300x-8.png"
            alt="About Us"
            className="rounded-lg shadow-lg" style={{width: "580px"}}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mission
