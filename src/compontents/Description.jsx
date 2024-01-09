import React from 'react'
import { FaEye, FaCog, FaHeart } from "react-icons/fa";



const Description = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="text-center p-8 transition">
        <h1 className="text-3xl font-bold mb-4">Who we are</h1>
        <p className="text-gray-600">
          FabTech Hub, where innovation meets excellence! As a dynamic and
          <br></br>
          forward-thinking technology company, we specialize in the seamless
          integration of hardware, software, and IoT solutions.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 p-10">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaEye className="text-gray-600 text-4xl  mb-4" />
          <span className="text-xl font-bold mb-4">Our Vision</span>
          <p className="text-gray-600">
            At FabTech Hub, we envision a connected world where cutting-edge
            technology enhances the way we live, work, and interact. Our goal is
            <br></br>
            to be at the forefront of this transformation, driving innovation
            through the convergence of hardware, software, and IoT.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaCog className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Value</span>
          <p className="text-gray-600">
            Our team of highly skilled hardware engineers is dedicated to
            crafting state-of-the-art devices that not only meet but exceed
            industry standards. From concept to prototype to final production
            <br></br>
            we leverage the latest technologies to design robust and efficient
            hardware solutions. We ensure that our hardware stands out in terms
            of performance, durability, and user experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaHeart className="text-gray-600 text-4xl mb-4" />
          <span className=" text-xl font-bold mb-4">Our Mission</span>
          <p className="text-gray-600">
            Our team of highly skilled hardware engineers is dedicated to
            crafting state-of-the-art devices that not only meet but exceed
            industry standards. From concept to prototype to final production
            <br></br>
            we leverage the latest technologies to design robust and efficient
            hardware solutions. We ensure that our hardware stands out in terms
            of performance, durability, and user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description