
    
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-8 px-8 mt-32">
        {[
          {
            title: "Smart Integration",
            description:
              "Smart integration is to enhance efficiency, accuracy, and reliability in various industries and applications. ",
          },
          {
            title: "Automatic Fare Collection System",
            description:
              "Automatic fare collection system uses electrical signals for various applications, including communication and control systems.",
          },
          {
            title: "Internet of Things",
            description:
              "IoT refers to interconnected devices that communicate and exchange data over the internet for various applications.",
          },
          {
            title: "Network Deployment",
            description:
              "Network deployment involves setting up systems and infrastructure for seamless connectivity.",
          },
          {
            title: "Web Applications",
            description:
              "Web app design focuses on creating user-friendly, interactive applications accessible through web browsers.",
          },
          {
            title: "Educational Kit",
            description:
              "Educational kits provide hands-on learning tools for students to explore and understand various concepts.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg text-center"
          >
            {/* Icon Placeholder */}
            <div className="flex justify-center items-center mb-4">
              <div className="bg-purple-800 p-3 rounded-full">
                {/* Replace this span with the actual icon */}
                <span className="text-xl text-blue-600">🚀</span>
              </div>
            </div>
            <h1 className="font-bold text-lg mb-2">{item.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <span className="text-purple-800 font-medium underline cursor-pointer">
              Learn More &rarr;
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;

      