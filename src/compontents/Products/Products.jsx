

      import React from "react";
      import Navbar from "../Navbar";
      import Footer from "../Footer";

      const Products = () => {
        return (
          <div>
            <Navbar />
            <div className="grid grid-cols-3 gap-8 px-8 mt-32 mb-16">
              {[
                {
                  title: "Smart Integration",
                  description:
                    "Smart integration optimizes operations by seamlessly connecting systems, tools, and technologies to enhance business efficiency and performance. It ensures accurate, reliable, and fast communication between devices and applications.",
                },
                {
                  title: "Automatic Fare Collection System",
                  description:
                    "An automatic fare collection system streamlines payment processes in transportation systems, enabling quick, secure, and efficient fare transactions through smart cards, apps, or digital wallets.",
                },
                {
                  title: "Internet of Things",
                  description:
                    "The Internet of Things (IoT) connects physical devices, allowing them to collect and share data over the internet. This fosters automation, improves decision-making, and enhances productivity across industries.",
                },
                {
                  title: "Network Deployment",
                  description:
                    "Network deployment involves planning, installing, and managing communication networks. This ensures reliable connectivity and supports data transmission for businesses, homes, and large-scale projects.",
                },
                {
                  title: "Web Applications",
                  description:
                    "Web applications are interactive platforms designed for tasks like shopping, education, or business operations. They provide seamless user experiences accessible through any web browser.",
                },
                {
                  title: "Educational Kit",
                  description:
                    "Educational kits provide hands-on tools for students to learn complex concepts interactively. They are designed to engage learners and make education more practical and impactful.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-6 rounded-lg text-center "
                >
                  {/* Icon Placeholder */}
                  <div className="flex justify-center items-center mb-4">
                    <div className="bg-purple-800 p-3 rounded-full">
                      {/* Replace this span with the actual icon */}
                      <span className="text-xl text-purple-600">🚀</span>
                    </div>
                  </div>
                  <h1 className="font-bold text-lg mb-2">{item.title}</h1>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
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
