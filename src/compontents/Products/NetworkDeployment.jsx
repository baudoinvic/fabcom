import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route if not imported already
import Navbar from "../Navbar";
import Footer from "../Footer";

const NetworkDeployment = () => {
  return (
    <div>
      <Navbar />

      <div className="ml-10 mr-5">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          Network deployment
        </h1>
      </div>

      <div className=" flex ml-10 mr-10 shadow-md">
        <div className="w-1/2">
          <span className="mr-4 mt-4">
            It is no myth that the right network design and deployment for any
            business increase its customer base, employee efficiency, and
            revenue. There ensuring that you start with that you carry out
            network design in a way that is holistic, yet precise and is
            critically tailored to the goals of the business is very important.
          </span>
        </div>
        <div className="w-1/2 ml-10">
          <img
            src="https://vietec.co.uk/wp-content/uploads/2023/07/Network-Design-600.jpg"
            alt="Smart Integration"
            className="w-4/5 h-auto"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default NetworkDeployment;
