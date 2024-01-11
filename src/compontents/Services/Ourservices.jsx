import React from 'react'
import Navbar from '../Navbar'
 import { SiSimilarweb } from "react-icons/si";
 import { GrIntegration } from "react-icons/gr";
 import { AiOutlineFieldTime } from "react-icons/ai";
 import { SiWebmoney } from "react-icons/si";
 import { SiKasasmart } from "react-icons/si";
 import { LiaUikit } from "react-icons/lia";
import Footer from '../Footer';

const Ourservices = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img
          class="w-full object-cover shadow-md "
          style={{ height: "560px" }}
          src="https://fablab.rw/wp-content/uploads/2022/09/fablab-scaled.jpg"
          alt="Description"
        />

        <div
          class="absolute inset-0 flex flex-col items-center justify-center "
          style={{ marginRight: "40rem" }}
        >
          <span
            class="font-bold text-white text-left mb-4 max-w-3/4 animate-moveText"
            style={{ fontSize: "30px" }}
          >
            FabTech Hub <br></br>this is our services As a dynamic<br></br> and
            forward-thinking technology company
          </span>

        
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex justify-center items-center space-x-4 p-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <SiSimilarweb className="text-gray-600 text-4xl  mb-4" />
            <span className="text-xl font-bold mb-4">Smart integration</span>
            <p className="text-gray-600">
              At FabTech Hub, we envision a connected world where cutting-edge
              technology enhances the way we live, work, and interact. Our goal
              is to be at the forefront of this transformation, driving
              innovation through the convergence of hardware, software, and IoT.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <GrIntegration className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4">Internet Of Things</span>
            <p className="text-gray-600">
              Our team of highly skilled hardware engineers is dedicated to
              crafting state-of-the-art devices that not only meet but exceed
              industry standards. From concept to prototype to final production,
              we leverage the latest technologies to design robust and efficient
              hardware solutions. We ensure that our hardware stands out in
              terms of performance, durability, and user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
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
              terms of performance, durability, and user experience.
            </p>
          </div>
        </div>
      </div>

      {/*second row*/}

      <br></br>
      <div className="bg-gray-100">
        <div className="flex justify-center items-center space-x-4 p-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
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

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <SiKasasmart className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4">
              Innovative Automatic Fare Collection Solutions
            </span>
            <p className="text-gray-600">
              Experience cutting-edge automatic fare collection with our team of
              highly skilled hardware engineers at [Your Company Name]. We are
              committed to designing state-of-the-art devices that set new
              industry standards. From initial concept to prototype and final
              production, we harness the latest technologies to create robust
              and efficient hardware solutions for automatic fare collection
              systems. Our focus is on delivering hardware that excels in
              performance, durability, and user experience, ensuring seamless
              and reliable operations for your transit systems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <LiaUikit className="text-gray-600 text-4xl mb-4" />
            <span className="text-xl font-bold mb-4">Educational Kit</span>
            <p className="text-gray-600">
              Explore the world of learning with our team of highly skilled
              hardware engineers dedicated to creating cutting-edge educational
              kits. We go beyond industry standards, from the conceptualization
              phase to prototype development and final production. Leveraging
              the latest technologies, we design robust and efficient hardware
              solutions to enhance the educational experience. Our commitment is
              to deliver educational kits that stand out in terms of
              .
            </p>
          </div>
        </div>
      </div>
       <br>
      </br>
      <br>
      </br>
      <Footer />
    </div>
  );
}

export default Ourservices