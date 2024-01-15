import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route if not imported already
import Navbar from "../Navbar";
import Footer from "../Footer";

const NetworkDeployment = () => {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-32">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          Network Deployment
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row mx-4 md:mx-10 lg:mx-20 xl:mx-32 shadow-md">
        <div className="w-full lg:w-1/2 lg:mr-5">
          <span className="mr-4 mt-4">
            It is no myth that the right network design and deployment for any
            business increase its customer base, employee efficiency, and
            revenue. Ensuring that you start with carrying out network design in
            a way that is holistic, yet precise, and is critically tailored to
            the goals of the business is very important.
          </span>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-5">
          <img
            src="https://vietec.co.uk/wp-content/uploads/2023/07/Network-Design-600.jpg"
            alt="Network Deployment"
            className="w-full h-auto"
          />
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
};

export default NetworkDeployment;
