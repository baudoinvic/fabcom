import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faShoppingCart,
  faSearch,
   faHeadphones,
   faBars,
   faChevronDown,
   faGlobe,
   faCaretDown,
  faUser,

} from "@fortawesome/free-solid-svg-icons";


import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fab-com-electronics">
      <div className="bg-gray-100 flex items-center justify-center px-4 py-4 shadow-md fab-com-navbar space-x-10">
        <span className="mx-2">
          <span className="text-gray-500 text-decoration-none flex items-center">
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            Careers
          </span>
        </span>
        <span className="mx-2">
          <span className="text-gray-500 flex items-center">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="mr-2 ml-1 text-gray-500"
            />
            Sample&Buy
            <FontAwesomeIcon
              icon={faChevronDown}
              className="ml-1 text-gray-500"
            />
          </span>
        </span>
        <span className=" mx-2">
          <span className="text-gray-500 flex items-center">
            <FontAwesomeIcon icon={faHeadphones} className="mr-2" />
            Support&Community
            <FontAwesomeIcon
              icon={faChevronDown}
              className="ml-1 text-gray-500"
            />
          </span>
        </span>
      </div>
      <div className="flex justify-center items-center px-8 py-5 shadow-md fab-com-navbar">
           <img src="https://jabesautoservice.com/wp-content/uploads/2017/12/lp-fabtech-logo.png" style={{marginRight: '7rem', width: '100px'}}></img>
        <ul className="text-gray-500 cursor-pointer flex items-center space-x-10">
    
          <li className="mx-2">Home</li>
          <FontAwesomeIcon icon={faBars} className="ml-0" />
          <li className="mx-2">Products</li>
          <li className="mx-2">Tools&Software</li>
          <li className="mx-2">Applications</li>
          <li className="mx-2">System Developer zone</li>
          <li className="mx-2 ">About us</li>
          <Link to="/contact">
            <li className="mx-2 mr-8">Contact us</li>
          </Link>
          <li className="mx-2 text-xl ">
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
          <li className="mx-2 text-xl ">
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
