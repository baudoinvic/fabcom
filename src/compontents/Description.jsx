import React from 'react'
import { FaEye, FaCog, FaHeart } from "react-icons/fa";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Description = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="text-center p-8 transition">
        <h1 className="text-3xl font-bold mb-4">Who we are</h1>
        <p className="text-gray-600">
          FabLab Rwanda is a space for members to turn innovative ideas into
          products specifically in the hardware and electronics domain.<br></br> The
          space provides a platform for capacity building and integration of
          hardware skills with software knowledge and quickly bringing Rwandan
          innovators closer<br></br> to the Internet of Things era. The space provides
          collaborative community, Knowledge base and innovation business model
          Guidance with a core focus<br></br> to increase Rwanda’s competitiveness in the
          fields of Design, Engineering, Electronics, Fabrication and High-Tech
          innovative business.<br></br> FABLAB Rwanda also serves as a model for the
          nation’s leaders in policy, government, and industry<br></br> to experience,
          first hand, Fab Lab’s grass roots approach in developing technical
          education and literacy, promoting innovation and launching<br></br> inventions
          while transforming traditional industries into digital fabrication
          agents.
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
          <FontAwesomeIcon icon={faLightbulb} className="text-gray-600 text-4xl mb-4" />
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