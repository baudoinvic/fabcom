import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Automatic = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-16 px-4 md:px-10 mb-32 md:mb-64">
        <span className="text-purple-800 font-bold text-sm md:text-lg">
          Automatic Fare Collection System
        </span>

        <div className="flex flex-col lg:flex-row mt-8 items-center lg:items-start gap-8">
        
          <div className="lg:w-1/2 text-gray-600 space-y-4">
            <p className="text-sm md:text-base leading-relaxed">
              An automatic fare collection system is designed to allow
              passengers to board public transportation vehicles without having
              to visit a ticket vending machine or check-in with a fare
              collector. Instead, passengers can pay their fares by tapping
              specialized tickets or passes on an electronic device.
            </p>
          </div>

          <div className="relative lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full md:w-3/4 lg:w-128 h-60 md:h-80 object-cover rounded-lg shadow-lg border border-solid border-gray-500"
              src="https://www.masstrans.in/wp-content/uploads/automatic-fare-collection-system-in-bus.jpg"
              alt="Large Background"
            />
            <img
              className="absolute bottom-[-100px] left-[10px] md:bottom-[-150px] md:left-[30px] w-2/5 md:w-1/3 rounded-lg border border-gray-500 shadow-lg"
              src="https://www.masstrans.in/wp-content/uploads/automatic-fare-collection-system-in-bus.jpg"
              alt="Small Foreground"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Automatic