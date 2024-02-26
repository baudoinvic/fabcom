import React from 'react'

const Product = () => {
  return (
    <div class="relative flex justify-center items-center">
      <img
        src="https://media.istockphoto.com/id/1332153694/photo/laptop-notebook-keyboard-with-colorful-background.jpg?s=612x612&w=0&k=20&c=vMohu22ZY81BQ8gd6ZRXbIeAg_rytEFlxpYXXnYkDs4="
        style={{ width: "104rem", height: "500px" }}
        alt="Robot Factory Image"
        class="object-cover shadow-lg"
      />
      <div class="absolute inset-0 flex flex-col justify-center items-center">
        <h1 class="text-white text-4xl font-bold mb-8">WHY CHOOSE US</h1>
        <div class="flex justify-center">
          <div class="border border-solid border-white rounded-md mx-2 p-4">
            <span class="text-white">80% OF SATISFIED CLIENTS</span>
          </div>
          <div class="border border-solid border-white rounded-md mx-2 p-4">
            <span class="text-white">QUICK REPAIR PROCESS</span>
          </div>
          <div class="border border-solid border-white rounded-md mx-2 p-4">
            <span class="text-white">100% GUARANTEE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product



   