import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const NetworkDeployment = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-16 px-4 md:px-10 mb-32 md:mb-64">
        <div className="flex flex-col lg:flex-row mt-8 items-center lg:items-start gap-8">
          <div className="lg:w-1/2 text-gray-600 space-y-4">
            <span className="text-purple-800 font-bold text-sm md:text-lg">
              Network Deployment
            </span>
            <p className="text-sm md:text-base leading-relaxed">
              It is no myth that the right network design and deployment for any
              business increase its customer base, employee efficiency, and
              revenue. Ensuring that you start with carrying out network design
              in a way that is holistic, yet precise, and is critically tailored
              to the goals of the business is very important.
            </p>
          </div>

          <div className="relative lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full md:w-3/4 lg:w-128 h-60 md:h-80 object-cover rounded-lg shadow-lg border border-solid border-gray-500"
              src="https://vietec.co.uk/wp-content/uploads/2023/07/Network-Design-600.jpg"
              alt="Large Background"
            />
            <img
              className="absolute bottom-[-100px] left-[10px] md:bottom-[-150px] md:left-[30px] w-2/5 md:w-1/3 rounded-lg border border-gray-500 shadow-lg"
              src="https://vietec.co.uk/wp-content/uploads/2023/07/Network-Design-600.jpg"
              alt="Small Foreground"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NetworkDeployment;
