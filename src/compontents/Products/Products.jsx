// import React from 'react'
// import Navbar from '../Navbar'
// import Footer from "../Footer";
// import { useState } from 'react';

// const Products = () => {

//  const [selectedCategory, setSelectedCategory] = useState("All");


//  const filterProducts = (category) => {
  
//  };


//   return (
//     <div className="">
//       <Navbar />

//       <div className="flex flex-col items-center mt-20">
//         <div class="flex space-x-2 filter-buttons ">
//           <button
//             class="bg-gray-400 text-white py-2 px-4 "
//             onclick="filterSelection('all')"
//           >
//             All
//           </button>
//           <button
//             class="bg-blue-500 text-white py-2 px-4 "
//             onclick="filterSelection('game')"
//           >
//             Automation Control
//           </button>
//           <button
//             class="bg-blue-500 text-white py-2 px-4 "
//             onclick="filterSelection('ecommerce')"
//           >
//             Electronics
//           </button>
//           <button
//             class="bg-blue-500 text-white py-2 px-4 "
//             onclick="filterSelection('music')"
//           >
//             Renewable Energy
//           </button>
//           <button
//             class="bg-blue-500 text-white py-2 px-4 "
//             onclick="filterSelection('workout')"
//           >
//             Power Electronics
//           </button>
//           <button
//             class="bg-blue-500 text-white py-2 px-4 "
//             onclick="filterSelection('food')"
//           >
//             Electrics Machine
//           </button>
//           <button
//             class="bg-blue-500 text-white py-2 px-4 "
//             onclick="filterSelection('web')"
//           >
//             Software And Learning
//           </button>
//         </div>
//       </div>

//       <div className="">
//         <div className="flex space-x-4 mt-20 ml-10 mr-10  ">
//           <div className="first-col flex flex-col items-start w-1/3 shadow-md">
//             <img
//               src="https://polatem.com/wp-content/uploads/2017/04/ind-automation.jpg"
//               className="w-full h-64 object-cover"
//               alt="Image 1"
//             />
//             <span>
//               {" "}
//               automation control is to enhance efficiency, accuracy, and
//               reliability in various industries and applications.{" "}
//             </span>
//             <button className="mt-2 bg-blue-500 text-white py-2 px-10 hover:bg-blue-600">
//               View
//             </button>
//           </div>

//           <div className="second-col flex flex-col items-start w-1/3 shadow-md">
//             <img
//               src="https://www.eetindia.co.in/wp-content/uploads/sites/4/2023/08/Semiconductor-Hero-1-BeF-1.jpg?w=600"
//               className="w-full h-64 object-cover"
//               alt="Image 2"
//             />
//             <span>
//               electronics is to manipulate electrical signals for various
//               applications, including communication, information processing,
//               control systems, entertainment, and more.
//             </span>
//             <button className="mt-2 bg-blue-500 text-white py-2 px-10 hover:bg-green-600">
//               View
//             </button>
//           </div>

//           <div className="second-col flex flex-col items-start w-1/3 shadow-md">
//             <img
//               src="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-12T154605.688.jpg"
//               className="w-full h-64 object-cover"
//               alt="Image 3"
//             />
//             <span>
//               Renewable energy refers to energy derived from sources that are
//               naturally replenished on a human timescale, such as sunlight,
//               wind, rain, tides, waves, geothermal heat, and biomass.{" "}
//             </span>
//             <button className="mt-2 bg-blue-500 text-white py-2 px-10 hover:bg-red-600">
//               View
//             </button>
//           </div>
//         </div>

//         {/* second row */}

//         <div className="flex space-x-4 mt-20 ml-10 mr-10">
//           <div className="first-col flex flex-col items-start w-1/3 shadow-md">
//             <img
//               src="https://tradebrains.in/wp-content/uploads/2023/09/ASM-Technologies-Vs-RIR-Power-Electronics-Cover-Image.jpg"
//               className="w-full h-64 object-cover"
//               alt="Image 1"
//             />
//             <span>
//               Power electronics is a specialized field within electronics that
//               focuses on the study and application of electronic devices to
//               control and convert electrical power.
//             </span>
//             <button className="mt-2 bg-blue-500 text-white py-2 px-10 hover:bg-blue-600">
//               View
//             </button>
//           </div>

//           <div className="second-col flex flex-col items-start w-1/3 shadow-md">
//             <img
//               src="https://static.wixstatic.com/media/ba2cd3_b9339e55a0be4a99a8ca83c54ccf0d6f~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/ba2cd3_b9339e55a0be4a99a8ca83c54ccf0d6f~mv2.jpg"
//               className="w-full h-64 object-cover"
//               alt="Image 2"
//             />
//             <span>
//               Electric machines, also known as electric motors and generators,
//               are devices that convert electrical energy into mechanical energy
//               (motors) or vice versa (generators). Power electronics are closely
//             </span>
//             <button className="mt-2 bg-blue-500 text-white py-2 px-10 hover:bg-green-600">
//               View
//             </button>
//           </div>

//           <div className="second-col flex flex-col items-start w-1/3 shadow-md">
//             <img
//               src="https://images.ctfassets.net/k0lk9kiuza3o/2PY0JwslnenVCA4Nt2tfg9/7b491666f2344fc9a2b338bde4f15576/Calendly_BestAcctManagementSoftware_BlogHeader_1920x1080.png?q=85&fm=webp"
//               className="w-full h-64 object-cover"
//               alt="Image 3"
//             />
//             <span>
//               Software refers to a set of instructions, programs, or data that
//               enable a computer or a system to perform specific tasks or
//               operations.
//             </span>
//             <button className="mt-2 bg-blue-500 text-white py-2 px-10 hover:bg-red-600">
//               View
//             </button>
//           </div>
//         </div>
//         </div>
//         <br></br>
//         <br></br>
//       <Footer />
//     </div>
//   );
// }

// export default Products


   import React, { useState } from "react";
   import Navbar from "../Navbar";
   import Footer from "../Footer";

   const Products = () => {
     const [selectedCategory, setSelectedCategory] = useState("All");

     const productsData = [
       {
         category: "Automation Control",
         image:
           "https://polatem.com/wp-content/uploads/2017/04/ind-automation.jpg",
         description:
           "Automation control is to enhance efficiency, accuracy, and reliability in various industries and applications.",
       },
       {
         category: "Electronics",
         image:
           "https://www.eetindia.co.in/wp-content/uploads/sites/4/2023/08/Semiconductor-Hero-1-BeF-1.jpg?w=600",
         description:
           "Electronics is to manipulate electrical signals for various applications, including communication, information processing, control systems, entertainment, and more.",
       },
       {
         category: "Renewable Energy",
         image:
           "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-12T154605.688.jpg",
         description:
           "Renewable energy refers to energy derived from sources that are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, geothermal heat, and biomass.",
       },
       {
         category: "Power Electronics",
         image:
           "https://tradebrains.in/wp-content/uploads/2023/09/ASM-Technologies-Vs-RIR-Power-Electronics-Cover-Image.jpg",
         description:
           "Power electronics is a specialized field within electronics that focuses on the study and application of electronic devices to control and convert electrical power.",
       },
       {
         category: "Electrics Machine",
         image:
           "https://static.wixstatic.com/media/ba2cd3_b9339e55a0be4a99a8ca83c54ccf0d6f~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/ba2cd3_b9339e55a0be4a99a8ca83c54ccf0d6f~mv2.jpg",
         description:
           "Electric machines, also known as electric motors and generators, are devices that convert electrical energy into mechanical energy (motors) or vice versa (generators).",
       },
       {
         category: "Software And Learning",
         image:
           "https://images.ctfassets.net/k0lk9kiuza3o/2PY0JwslnenVCA4Nt2tfg9/7b491666f2344fc9a2b338bde4f15576/Calendly_BestAcctManagementSoftware_BlogHeader_1920x1080.png?q=85&fm=webp",
         description:
           "Software refers to a set of instructions, programs, or data that enable a computer or a system to perform specific tasks or operations.",
       },
     ];

     const filterProducts = (category) => {
       setSelectedCategory(category);
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
           <div className="flex space-x-2 filter-buttons ">
             <button
               className={`bg-gray-400 text-white py-2 px-4 ${
                 selectedCategory === "All" ? "active" : ""
               }`}
               onClick={() => filterProducts("All")}
             >
               All
             </button>
             <button
               className={`bg-blue-500 text-white py-2 px-4 ${
                 selectedCategory === "Automation Control" ? "active" : ""
               }`}
               onClick={() => filterProducts("Automation Control")}
             >
               Automation Control
             </button>
             <button
               className={`bg-blue-500 text-white py-2 px-4 ${
                 selectedCategory === "Electronics" ? "active" : ""
               }`}
               onClick={() => filterProducts("Electronics")}
             >
               Electronics
             </button>
             <button
               className={`bg-blue-500 text-white py-2 px-4 ${
                 selectedCategory === "Renewable Energy" ? "active" : ""
               }`}
               onClick={() => filterProducts("Renewable Energy")}
             >
               Renewable Energy
             </button>
             <button
               className={`bg-blue-500 text-white py-2 px-4 ${
                 selectedCategory === "Power Electronics" ? "active" : ""
               }`}
               onClick={() => filterProducts("Power Electronics")}
             >
               Power Electronics
             </button>
             <button
               className={`bg-blue-500 text-white py-2 px-4 ${
                 selectedCategory === "Electrics Machine" ? "active" : ""
               }`}
               onClick={() => filterProducts("Electrics Machine")}
             >
               Electrics Machine
             </button>
             <button
               className={`bg-blue-500 text-white py-2 px-4 ${
                 selectedCategory === "Software And Learning" ? "active" : ""
               }`}
               onClick={() => filterProducts("Software And Learning")}
             >
               Software And Learning
             </button>
           </div>
         </div>

         {/*maping*/}

         <div className="">
           <div className="flex flex-wrap mt-20 ml-10 mr-10 -mx-10">
             {filteredProducts.map((product, index) => (
               <div
                 key={index}
                 className="first-col flex flex-col items-start w-1/3 shadow-md mb-4 px-2"
                 style={{ width: "calc(33.33% - 16px)" }} // Adjust the width as needed
               >
                 <img
                   src={product.image}
                   className="w-full h-64 object-cover"
                   alt={`Image ${index + 1}`}
                 />
                 <span>{product.description}</span>
                 <button className="mt-2 bg-blue-500 text-white py-2 px-10 hover:bg-blue-600">
                   View
                 </button>
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
