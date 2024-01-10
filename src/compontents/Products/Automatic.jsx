import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Automatic = () => {
  return (
    <div>
    
    <Navbar />

      <div className="ml-10 mr-5">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          Automatic fare collection system
        </h1>
      </div>

      <div className=" flex ml-10 mr-10 shadow-md">
        <div className="w-1/2">
          <span className="mr-4 mt-4">
            An automatic fare collection system is designed to allow passengers
            to board public transportation vehicles without having to visit a
            ticket vending machine or check-in with a fare collector. Instead,
            passengers can pay their fares by tapping specialized tickets or
            passes on an electronic device.
          </span>
        </div>
        <div className="w-1/2 ml-10">
          <img
            src="https://www.masstrans.in/wp-content/uploads/automatic-fare-collection-system-in-bus.jpg"
            alt="Automatic"
            className="w-4/5 h-auto"
          />
        </div>
      </div>
      <br></br>
      <br></br>
       <Footer />
    </div>
  );
}

export default Automatic