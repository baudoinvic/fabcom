import React from 'react'
import { FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="">
      <div class="relative flex justify-center items-center">
        <img
          src="https://media.istockphoto.com/id/1332153694/photo/laptop-notebook-keyboard-with-colorful-background.jpg?s=612x612&w=0&k=20&c=vMohu22ZY81BQ8gd6ZRXbIeAg_rytEFlxpYXXnYkDs4="
          style={{ width: "104rem", height: "500px" }}
          alt="Robot Factory Image"
          class="object-cover shadow-lg"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-8">WHY CHOOSE US</h1>
          <div className="flex flex-wrap justify-center">
            <div className="border border-solid border-white rounded-md mx-2 my-2 p-4 w-1/2 sm:w-auto">
              <FaCheckCircle className="text-white mr-2" />
              <span className="text-white">80% OF SATISFIED CLIENTS</span>
            </div>
            <div className="border border-solid border-white rounded-md mx-2 my-2 p-4 w-1/2 sm:w-auto">
              <FaClock className="text-white mr-2" />
              <span className="text-white">QUICK REPAIR PROCESS</span>
            </div>
            <div className="border border-solid border-white rounded-md mx-2 my-2 p-4 w-1/2 sm:w-auto">
              <FaShieldAlt className="text-white mr-2" />
              <span className="text-white">70% PROJECTS DONE</span>
            </div>
          </div>
        </div>
      </div>

      <div class="p-20 flex flex-row items-start bg-gray-100 shadow-md">
        <span class="mr-6 text-gray-600" style={{ marginTop: "-2rem" }}>
          <span className="text-3xl font-bold text-gray-800 mb-4">
            Get in touch for collaboration
          </span>
          <br />
          <br />
          Hey there! This is the best way we can get in touch to collaborate on
          your new project.
          <br />
          If you have any questions, feel free to reach out to us through our
          official email address or phone number.
          <br />
          We're also active on various social media platforms, so connect with
          us on Facebook, Instagram, or LinkedIn.
          <br />
          We look forward to hearing from you and exploring opportunities for
          collaboration!
        </span>
        <Link to="/contact">
          <button class="px-6 py-3 bg-gray-900 text-white rounded hover:bg-blue-600 ml-40">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Product



   