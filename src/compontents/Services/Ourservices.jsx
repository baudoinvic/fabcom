import React from 'react'
import Navbar from '../Navbar'
import { FaEye, FaCog, FaHeart } from "react-icons/fa";
 import { SiSimilarweb } from "react-icons/si";
 import { GrIntegration } from "react-icons/gr";
 import { AiOutlineFieldTime } from "react-icons/ai";

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

          <button
            class="px-4 py-4 bg-[#02010130] text-white font-bold rounded hover:bg-black-100"
            style={{
              borderRadius: "30px",
              border: "solid 1px gray",
              marginRight: "25rem",
            }}
          >
            our services
          </button>
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
            <span className="text-xl font-bold mb-4">IoT</span>
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
    </div>
  );
}

export default Ourservices