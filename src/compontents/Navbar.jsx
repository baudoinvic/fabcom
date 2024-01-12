
 import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {
   faGlobe,
   faShoppingCart,
   faBars,
   faChevronDown,
   faUser,
 } from "@fortawesome/free-solid-svg-icons";
 import { Link } from "react-router-dom";

 const Navbar = () => {
   return (
     <div className="fab-com-electronics bg-gray-900 text-white">
       <div className="bg-gray-800 flex items-center justify-between px-4 py-4 shadow-md fab-com-navbar space-x-10">
         <span className="mx-2 flex items-center space-x-8 ml-auto">
           <span className="text-white">
             <FontAwesomeIcon icon={faShoppingCart} className="mr-2 ml-1" />
             Sample&Buy
             <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
           </span>

           <Link to="/Career" className="text-white">
             <span className="text-decoration-none flex items-center">
               <FontAwesomeIcon icon={faGlobe} className="mr-2" />
               Careers
             </span>
           </Link>
         </span>
       </div>

    
       <div className="flex justify-between items-center px-8 py-5 shadow-md fab-com-navbar">
         <Link to="/homepage" className="text-white">
           <img
             src="https://jabesautoservice.com/wp-content/uploads/2017/12/lp-fabtech-logo.png"
             style={{ width: "100px" }}
             alt="Logo"
           />
         </Link>

         <ul className="cursor-pointer flex items-center space-x-10 text-white">
           <Link to="/homepage" className="text-white">
             <li className="mx-2">Home</li>
           </Link>

           <Link to="/products" className="text-white">
             <span className="flex items-center">
               <FontAwesomeIcon icon={faBars} />
               <li className="mx-2">Products</li>
             </span>
           </Link>

           <Link to="/about" className="text-white">
             <li className="mx-2">About us</li>
           </Link>

           <Link to="/ourservices" className="text-white">
             <li className="mx-2">Our Services</li>
           </Link>

           <Link to="/contact" className="text-white">
             <li className="mx-2 mr-8">Contact us</li>
           </Link>

           <li className="mx-2 text-xl">
             <FontAwesomeIcon icon={faShoppingCart} />
           </li>

           <Link to="/login" className="text-white">
             <li className="mx-2 text-xl">
               <FontAwesomeIcon icon={faUser} />
             </li>
           </Link>
         </ul>
       </div>
     </div>
   );
 };

 export default Navbar;

