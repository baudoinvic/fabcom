import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Buy = () => {
  return (
   
    <div className="sample-buy">
      <Navbar />
      <div class="">
        <div class="flex flex-col items-left justify-left">
          <h1 class="text-3xl font-bold mt-10 mb-3 ml-10">
            New and Featured Products
          </h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          <div class="rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://estore.st.com/media/catalog/product/s/p/spc58ec80e3qmc1x_1.jpg"
              alt="Product 1"
              class="w-50 h-64 object-cover"
            ></img>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">SPC58EC80E3QMC1X</h2>
              <p class="text-gray-600">
                32-bit Power Architecture MCU for Automotive General Purpose
                Applications - Chorus family
              </p>
            </div>
          </div>

          <div class="rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://estore.st.com/media/catalog/product/a/s/asm330lhhxg1.jpg"
              alt="Product 2"
              class="w-50 h-64 object-cover"
            ></img>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">ASM330LHHXG1TR</h2>
              <p class="text-gray-600">
                High-accuracy 6-axis automotive inertial measurement unit (IMU)
                with embedded machine learning core and dual operating modes
              </p>
            </div>
          </div>

          <div class=" overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://estore.st.com/media/catalog/product/v/n/vnd9025ajtr.jpg"
              alt="Product 3"
              class="w-50 h-64 object-cover"
            ></img>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">VND9025AJTR</h2>
              <p class="text-gray-600">
                Double channel high-side driver with current sense analog
                feedback for automotive applications
              </p>
            </div>
          </div>

          <div class="overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://estore.st.com/media/catalog/product/t/e/teseo-vic3da.jpg"
              alt="Product 4"
              class="w-50 h-64 object-cover"
            ></img>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">TESEO-VIC3DA</h2>
              <p class="text-gray-600">
                High-accuracy 6-axis automotive inertial measurement unit (IMU)
                with embedded machine learning core and dual operating modes
              </p>
            </div>
          </div>

          <div class="overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://estore.st.com/media/catalog/product/t/s/tsc1641iqt.jpg"
              alt="Product 5"
              class="w-50 h-64 object-cover"
            ></img>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">TSC1641IQT</h2>
              <p class="text-gray-600">
                Synchronous rectifier controller for non-complementary active
                clamp flyback converter
              </p>
            </div>
          </div>

          <div class=" overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://estore.st.com/media/catalog/product/s/t/stwlc99jr.jpg"
              alt="Product 6"
              class="w-50 h-64 object-cover"
            ></img>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">STWLC99JR</h2>
              <p class="text-gray-600">
                Qi-compliant inductive wireless charger power receiver for 100W
                applications
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Buy