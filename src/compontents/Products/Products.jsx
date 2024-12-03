

      import React from "react";
      import { Link } from "react-router-dom";
      import Navbar from "../Navbar";
      import Footer from "../Footer";

      const Products = () => {
        const services = [
          {
            title: "Smart Integration",
            description:
              "Smart integration optimizes operations by seamlessly connecting systems, tools, and technologies to enhance business efficiency and performance.",
            link: "/products/smart-integration", // Link to Smart Integration page
          },
          {
            title: "Automatic Fare Collection System",
            description:
              "An automatic fare collection system streamlines payment processes in transportation systems, enabling quick, secure, and efficient fare transactions.",
            link: "/Automatic", // Link to Automatic Fare Collection page
          },
          {
            title: "Internet of Things",
            description:
              "The Internet of Things (IoT) connects physical devices, allowing them to collect and share data over the internet. This fosters automation and productivity.",
            link: "/products/iot", // Link to IoT page
          },
          {
            title: "Network Deployment",
            description:
              "Network deployment involves planning, installing, and managing communication networks to ensure reliable connectivity for businesses and homes.",
            link: "/products/network-deployment", // Link to Network Deployment page
          },
          {
            title: "Web Applications",
            description:
              "Web applications are interactive platforms for tasks like shopping, education, or business operations, accessible through web browsers.",
            link: "/products/web-app", // Link to Web Applications page
          },
          {
            title: "Educational Kit",
            description:
              "Educational kits provide hands-on tools for students to learn complex concepts interactively, making education more practical and engaging.",
            link: "/educational-kit", // Link to Educational Kit page
          },
        ];

        return (
          <div>
            <Navbar />
            <div className="grid grid-cols-3 gap-8 px-8 mt-32 mb-32">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-6 rounded-lg text-center"
                >
                  {/* Icon Placeholder */}
                  <div className="flex justify-center items-center mb-4">
                    <div className="bg-purple-800 p-3 rounded-full">
                      {/* Replace this span with the actual icon */}
                      <span className="text-xl text-white">🚀</span>
                    </div>
                  </div>
                  <h1 className="font-bold text-lg mb-2">{service.title}</h1>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-purple-800 font-medium underline cursor-pointer"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        );
      };

      export default Products;

