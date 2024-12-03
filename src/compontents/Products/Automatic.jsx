import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Automatic = () => {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-32">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          Automatic Fare Collection System
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row mx-4 md:mx-10 lg:mx-20 xl:mx-32 ">
        <div className="w-full lg:w-1/2 lg:mr-5">
          <span className="mr-4 mt-4">
            An automatic fare collection system is designed to allow passengers
            to board public transportation vehicles without having to visit a
            ticket vending machine or check-in with a fare collector. Instead,
            passengers can pay their fares by tapping specialized tickets or
            passes on an electronic device.
          </span>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-5">
          <img
            src="https://www.masstrans.in/wp-content/uploads/automatic-fare-collection-system-in-bus.jpg"
            alt="Automatic"
            className="w-full h-auto"
          />
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
}

export default Automatic