import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fab-com-electronics">
      <div className="flex justify-between items-center  px-4 py-10 shadow-md fab-com-navbar">
        {/* Left Side */}
        <div className="left-side flex items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="w-4 h-4 text-gray-600"
          />
          <span className="mr-2">fabcom@gmail.com</span>
          <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-gray-600" />
          <span className="ml-2">+250783012138</span>
        </div>

        {/* Right Side */}
        <ul className="cursor-pointer flex items-center">
          <li className="mx-2">Home</li>
          <li className="mx-2">About Us</li>
          <li className="mx-2">Our Services</li>
          <Link to="/contact">
            <li className="mx-2">Contact us</li>
         </Link>
        </ul>
     
      </div>
    </div>
  );
};

export default Navbar;
