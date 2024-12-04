


import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Provider = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="pt-16 px-10 mb-64">
      
        <span className="text-purple-800 font-bold text-lg">WHO WE ARE</span>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
         At Fab <span className="text-purple-800">Tech</span> Hub
        </h1>

     
        <div className="flex flex-col lg:flex-row mt-8 items-center gap-8">
    
          <div className="lg:w-1/2 text-gray-600 space-y-4">
            <p>
              At FabtechHub innovation meets excellence! As a dynamic and
              forward-thinking technology company, we specialize in the seamless
              integration of hardware, software, and IoT solutions. Our Vision:
              At FabTech Hub, we envision a connected world where cutting-edge
              technology enhances the way we live, work, and interact. Our goal
              is to be at the forefront of this transformation, driving
              innovation through the convergence of hardware, software, and IoT.
              Expertise in Hardware Design: Our team of highly skilled hardware
              engineers is dedicated to crafting state-of-the-art devices that
              not only meet but exceed industry standards. From concept to
              prototype to final production, we leverage the latest technologies
              to design robust and efficient hardware solutions. We ensure that
              our hardware stands out in terms of performance, durability, and
              user experience.
            </p>
            <p>
              we take pride in our software development prowess. Our team of
              software engineers is adept at creating custom applications,
              firmware, and operating systems that seamlessly integrate with our
              hardware offerings. We believe in user-centric design, ensuring
              that our software solutions are not only powerful but also
              intuitive and user-friendly. Innovative IoT Solutions: The
              Internet of Things (IoT) has revolutionized the way devices
              communicate and interact. At FabTech Hub, we harness the potential
              of IoT to create intelligent and connected ecosystems.
            </p>
          
          </div>

       
          <div className="relative lg:w-1/2 ml-32 mb-16">
       
            <img
              className="w-128 h-80 object-cover rounded-lg shadow-lg border border-solid border-gray-500"
              src="https://media.istockphoto.com/id/1157610669/vector/financial-audit-budget-graph-tax-expert-and-business-finance-balance-valuation-isometric-3d.jpg?s=612x612&w=0&k=20&c=EhrSx9BlGTxEnnNir0xsuqor9RJ1Ql91eT82v2buSlc="
              alt="Large Background"
            />
           
            <img
              className="absolute bottom-[-150px] left-[30px] w-2/5 rounded-lg border border-gray-500 shadow-lg "
              src="https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/about-us@300x-8.png"
              alt="Small Foreground"
            />
          </div>
        </div>
      </div> */}

      <div className="pt-16 px-4 md:px-10 mb-32 md:mb-64">
        <span className="text-purple-800 font-bold text-sm md:text-lg">
          WHO WE ARE
        </span>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
          At Fab <span className="text-purple-800">Tech</span> Hub
        </h1>

        <div className="flex flex-col lg:flex-row mt-8 items-center lg:items-start gap-8">
          {/* Text Section */}
          <div className="lg:w-1/2 text-gray-600 space-y-4">
            <p className="text-sm md:text-base leading-relaxed">
              At FabtechHub innovation meets excellence! As a dynamic and
              forward-thinking technology company, we specialize in the seamless
              integration of hardware, software, and IoT solutions.
              <strong>Our Vision:</strong> At FabTech Hub, we envision a
              connected world where cutting-edge technology enhances the way we
              live, work, and interact. Our goal is to be at the forefront of
              this transformation, driving innovation through the convergence of
              hardware, software, and IoT.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Expertise in Hardware Design: Our team of highly skilled hardware
              engineers is dedicated to crafting state-of-the-art devices that
              not only meet but exceed industry standards. From concept to
              prototype to final production, we leverage the latest technologies
              to design robust and efficient hardware solutions. We ensure that
              our hardware stands out in terms of performance, durability, and
              user experience.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              We take pride in our software development prowess. Our team of
              software engineers is adept at creating custom applications,
              firmware, and operating systems that seamlessly integrate with our
              hardware offerings. We believe in user-centric design, ensuring
              that our software solutions are not only powerful but also
              intuitive and user-friendly. Innovative IoT Solutions: The
              Internet of Things (IoT) has revolutionized the way devices
              communicate and interact. At FabTech Hub, we harness the potential
              of IoT to create intelligent and connected ecosystems.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full md:w-3/4 lg:w-128 h-60 md:h-80 object-cover rounded-lg shadow-lg border border-solid border-gray-500"
              src="https://media.istockphoto.com/id/1157610669/vector/financial-audit-budget-graph-tax-expert-and-business-finance-balance-valuation-isometric-3d.jpg?s=612x612&w=0&k=20&c=EhrSx9BlGTxEnnNir0xsuqor9RJ1Ql91eT82v2buSlc="
              alt="Large Background"
            />
            <img
              className="absolute bottom-[-100px] left-[10px] md:bottom-[-150px] md:left-[30px] w-2/5 md:w-1/3 rounded-lg border border-gray-500 shadow-lg"
              src="https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/about-us@300x-8.png"
              alt="Small Foreground"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Provider;
