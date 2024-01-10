
    import React, { useState } from "react";
    import Navbar from "../Navbar";
    import Footer from "../Footer";
    import { Link } from "react-router-dom";

    const Products = () => {
      const [selectedCategory, setSelectedCategory] = useState("All");

      const productsData = [
        {
          category: "Smart integration",
          image:
            "https://www.iotallknow.com/wp-content/uploads/2022/11/%E6%99%BA%E8%83%BD%E7%81%8C%E6%BA%89%E7%9A%84%E5%BA%94%E7%94%A8%E5%AE%9E%E4%BE%8B.webp",
          description:
            "Smart integration is to enhance efficiency, accuracy, and reliability in various industries and applications.",
        },
        {
          category: "Automatic fare collection system",
          image:
            "https://www.masstrans.in/wp-content/uploads/automatic-fare-collection-system-in-bus.jpg",
          description:
            "Automatic fare collection system uses electrical signals for various applications, including communication, information processing, control systems, entertainment, and more.",
        },
        {
          category: "IOT",
          image:
            "https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/iot-coverage-2.jpg?rev=4fa2eb28f841448c9d126f911019398f",
          description:
            "IOT refers to energy derived from sources that are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, geothermal heat, and biomass.",
        },
        {
          category: "Web app",
          image:
            "https://assets.materialup.com/uploads/5afb8065-ef8d-4a57-a627-8a87da96ca1c/preview.jpg",
          description:
            "Web app design is a specialized field within electronics that focuses on the study and application of electronic devices to control and convert electrical power.",
        },
        {
          category: "Network deployment",
          image:
            "https://vietec.co.uk/wp-content/uploads/2023/07/Network-Design-600.jpg",
          description:
            "Network deployment, also known as electric motors and generators, are devices that convert electrical energy into mechanical energy (motors) or vice versa (generators).",
        },
        {
          category: "Educational KIT",
          image:
            "https://images.ctfassets.net/k0lk9kiuza3o/2PY0JwslnenVCA4Nt2tfg9/7b491666f2344fc9a2b338bde4f15576/Calendly_BestAcctManagementSoftware_BlogHeader_1920x1080.png?q=85&fm=webp",
          description:
            "Educational KIT programs, or data that enable a computer or a system to perform specific tasks or operations.",
        },
      ];

      const filterProducts = (category) => {
        setSelectedCategory(category);
      };

      const generateProductLink = (category) => {
        const formattedCategory = category.replace(/\s+/g, "-").toLowerCase();
        return `/products/${formattedCategory}`;
      };

      const filteredProducts =
        selectedCategory === "All"
          ? productsData
          : productsData.filter(
              (product) => product.category === selectedCategory
            );

      return (
        <div className="">
          <Navbar />

          <div className="flex flex-col items-center mt-20">
            <div className="flex space-x-2 filter-buttons">
              <button
                className={`bg-gray-400 text-white py-2 px-4 ${
                  selectedCategory === "All" ? "active" : ""
                }`}
                onClick={() => filterProducts("All")}
              >
                All
              </button>

              {productsData.map((product, index) => (
                <button
                  key={index}
                  className={`bg-blue-500 text-white py-2 px-4 ${
                    selectedCategory === product.category ? "active" : ""
                  }`}
                  onClick={() => filterProducts(product.category)}
                >
                  {product.category}
                </button>
              ))}
            </div>
          </div>

          <div className="">
            <div className="flex flex-wrap mt-20 ml-10 mr-10 -mx-10 cursor-pointer">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="first-col flex flex-col items-start w-1/3 shadow-md mb-4 px-2"
                  style={{ width: "calc(33.33% - 16px)" }}
                >
                  <img
                    src={product.image}
                    className="w-full h-64 object-cover"
                    alt={`Image ${index + 1}`}
                  />
                  <span>{product.description}</span>
                  <Link to={generateProductLink(product.category)}>
                    <button className="mt-2 bg-blue-500 text-white py-2 px-10 hover:bg-blue-600">
                      View
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <br />
          <br />
          <Footer />
        </div>
      );
    };

    export default Products;

