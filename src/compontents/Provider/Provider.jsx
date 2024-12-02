// import React from 'react'
// import Navbar from '../Navbar'
// import Footer from '../Footer';

// const Provider = () => {
//   return (
//     <div>
//       <Navbar />
//       <div>
//         <span className="pt-16 text-purple-800 font-bold ">WHO WE ARE</span>
//         <h1 className="text-3xl font-bold pt-4">About FabtechHub</h1>
//         <div className="flex ml-10 mr-10">
//           <p className="w-1/2">
//             At FabtechHub innovation meets excellence! As a dynamic and
//             forward-thinking technology company, we specialize in the seamless
//             integration of hardware, software, and IoT solutions. Our Vision: At
//             FabTech Hub, we envision a connected world where cutting-edge
//             technology enhances the way we live, work, and interact. Our goal is
//             to be at the forefront of this transformation, driving innovation
//             through the convergence of hardware, software, and IoT. Expertise in
//             Hardware Design: Our team of highly skilled hardware engineers is
//             dedicated to crafting state-of-the-art devices that not only meet
//             but exceed industry standards. From concept to prototype to final
//             production, we leverage the latest technologies to design robust and
//             efficient hardware solutions. We ensure that our hardware stands out
//             in terms of performance, durability, and user experience.
          
//               we take pride in our software development prowess. Our team of
//               software engineers is adept at creating custom applications,
//               firmware, and operating systems that seamlessly integrate with our
//               hardware offerings. We believe in user-centric design, ensuring
//               that our software solutions are not only powerful but also
//               intuitive and user-friendly. Innovative IoT Solutions: The
//               Internet of Things (IoT) has revolutionized the way devices
//               communicate and interact. At FabTech Hub, we harness the potential
//               of IoT to create intelligent and connected ecosystems.
//             </p>
        

//           <div className="">
//             <img src="https://media.istockphoto.com/id/1157610669/vector/financial-audit-budget-graph-tax-expert-and-business-finance-balance-valuation-isometric-3d.jpg?s=612x612&w=0&k=20&c=EhrSx9BlGTxEnnNir0xsuqor9RJ1Ql91eT82v2buSlc=" />
//             <img src='https://template.creativemox.com/evostart/wp-content/uploads/sites/16/2024/06/about-us@300x-8.png' />
//           </div>
          
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Provider


import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Provider = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 px-10">
        {/* Section Title */}
        <span className="text-yellow-600 font-bold text-lg">About us</span>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          Plan Your <span className="text-yellow-600">Trip</span> with Us
        </h1>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row mt-8 items-center gap-8">
          {/* Left Section: Text */}
          <div className="lg:w-1/2 text-gray-600 space-y-4">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia.
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life. Mountains, she had a
              last view back on the skyline.
            </p>
            <button className="bg-yellow-600 text-white py-2 px-6 rounded shadow hover:bg-yellow-700">
              READ MORE
            </button>
          </div>

          {/* Right Section: Images */}
          <div className="relative lg:w-1/2">
            {/* Large Background Image */}
            <img
              className="w-128 h-80 object-cover rounded-lg shadow-lg border border-solid border-gray-500"
              src="https://media.istockphoto.com/id/1157610669/vector/financial-audit-budget-graph-tax-expert-and-business-finance-balance-valuation-isometric-3d.jpg?s=612x612&w=0&k=20&c=EhrSx9BlGTxEnnNir0xsuqor9RJ1Ql91eT82v2buSlc="
              alt="Large Background"
            />
            {/* Smaller Foreground Image */}
            <img
              className="absolute bottom-[-150px] left-[30px] w-2/5 rounded-lg border border-gray-500 shadow-lg "
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
