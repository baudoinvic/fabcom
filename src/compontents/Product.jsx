import React from 'react'
import { FaCheckCircle, FaClock, FaShieldAlt } from "react-icons/fa";

const Product = () => {
  return (
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
            <span className="text-white">100% GUARANTEE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product



   