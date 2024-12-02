
  // import React, { useState } from "react";
  // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  // import {
  //   faUser,
  // } from "@fortawesome/free-solid-svg-icons";
  // import { IoMdMenu } from "react-icons/io";
 
  // import { Link } from "react-router-dom";


  // const Navbar = () => {
  //   const [openModal, setOpenModal] = useState(false);

  //     const toggleModal = () => {
  //       setOpenModal((prev) => !prev);
  //     };

  //   return (
  //     <div className="fab-com-electronics text-white  ">
  //       {/* Desktop navigation */}

  //       <div className=" hidden md:flex items-center justify-end px-4 py-2 shadow-md fab-com-navbar space-x-10 "></div>

  //       {/* Mobile navigation */}
  //       <div
  //         className={`md:hidden flex items-center justify-end px-4 py-4 bg-gray-800 text-white`}
  //       >
  //         {/* Menu Icon */}
  //         <IoMdMenu
  //           className="text-[2rem] cursor-pointer"
  //           onClick={toggleModal}
  //         />
  //       </div>

  //       {/* Mobile navigation menu */}
  //       {openModal && (
  //         <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-55 z-50">
  //           <div className="flex justify-end p-4">
  //             {/* Close Icon */}
  //             <IoMdMenu
  //               className="text-[2rem] text-white cursor-pointer"
  //               onClick={toggleModal}
  //             />
  //           </div>
  //           <div className="flex flex-col items-stretch text-white">
  //             <Link
  //               to="/homepage"
  //               className="my-2 px-8 py-4 "
  //               onClick={toggleModal}
  //             >
  //               Home
  //             </Link>

  //             <Link
  //               to="/about"
  //               className="my-2 px-8 py-4 "
  //               onClick={toggleModal}
  //             >
  //               About us
  //             </Link>

  //             <Link
  //               to="/products"
  //               className="my-2 px-8 py-4 "
  //               onClick={toggleModal}
  //             >
  //               Products
  //             </Link>
  //             <Link
  //               to="/contact"
  //               className="my-2 px-8 py-4 "
  //               onClick={toggleModal}
  //             >
  //               Contact us
  //             </Link>

  //             <Link to="/Career" className="my-2 px-8 py-4">
  //               <span className="text-decoration-none flex items-center">
  //                 <FontAwesomeIcon icon={faUser} className="mr-2" />
  //                 Careers
  //               </span>
  //             </Link>
  //           </div>
  //         </div>
  //       )}

  //       {/* The rest of your desktop navigation */}
  //       <div className="hidden md:flex justify-between items-center px-8 py-5 shadow-md fab-com-navbar bg-white">
  //         <Link to="/homepage" className="text-black">
  //           FabTechHub
  //         </Link>

  //         <ul className="cursor-pointer flex items-center space-x-10 text-white">
  //           <Link to="/homepage" className="text-black">
  //             <li className="mx-2">Home</li>
  //           </Link>

  //           <Link to="/about" className="text-black">
  //             <li className="mx-2">About us</li>
  //           </Link>

  //           <Link to="/products" className="text-black">
  //             <span className="flex items-center">
  //               <li className="mx-2">Our Products</li>
  //             </span>
  //           </Link>

  //           <Link to="/Career" className="text-black">
  //             <span className="text-decoration-none flex items-center">
  //               Careers
  //             </span>
  //           </Link>
  //           <Link
  //             to="/contact"
  //             className="text-white bg-purple-800 font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out p-3"
  //           >
  //             <li className="mx-2 mr-8">Contact us</li>
  //           </Link>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle mobile menu
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
    // Close about dropdown when closing mobile menu
    setIsAboutDropdownOpen(false);
  };

  // Toggle About dropdown in mobile view
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fab-com-electronics text-white relative">
      {/* Mobile navigation */}
      <div
        className={`md:hidden flex items-center justify-between px-4 py-4 bg-gray-800 text-white`}
      >
        <Link to="/homepage" className="text-white font-bold">
          FabTechHub
        </Link>
        {/* Menu Icon */}
        {openModal ? (
          <IoMdClose
            className="text-[2rem] cursor-pointer"
            onClick={toggleModal}
          />
        ) : (
          <IoMdMenu
            className="text-[2rem] cursor-pointer"
            onClick={toggleModal}
          />
        )}
      </div>

      {/* Mobile navigation menu */}
      {openModal && (
        <div className="md:hidden fixed inset-0 bg-gray-800 z-50 overflow-y-auto">
          <div className="flex flex-col items-stretch text-white">
            <Link
              to="/homepage"
              className="my-2 px-8 py-4 border-b border-gray-700"
              onClick={toggleModal}
            >
              Home
            </Link>

            {/* About Us Dropdown for Mobile */}
            <div
              className="my-2 px-8 py-4 border-b border-gray-700 flex justify-between items-center"
              onClick={toggleAboutDropdown}
            >
              About us
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transition-transform duration-300 ${
                  isAboutDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isAboutDropdownOpen && (
              <div className="bg-gray-700">
                <Link
                  to="/about/who-we-are"
                  className="block my-2 px-12 py-3"
                  onClick={toggleModal}
                >
                  Who We Are
                </Link>
                <Link
                  to="/about/our-mission"
                  className="block my-2 px-12 py-3"
                  onClick={toggleModal}
                >
                  Our Mission
                </Link>
              </div>
            )}

            <Link
              to="/products"
              className="my-2 px-8 py-4 border-b border-gray-700"
              onClick={toggleModal}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="my-2 px-8 py-4 border-b border-gray-700"
              onClick={toggleModal}
            >
              Contact us
            </Link>

            <Link
              to="/Career"
              className="my-2 px-8 py-4 border-b border-gray-700 flex items-center"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Careers
            </Link>
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <div className="hidden md:flex justify-between items-center px-8 py-5 shadow-md fab-com-navbar bg-white">
        <Link to="/homepage" className="text-black font-bold">
          FabTechHub
        </Link>

        <ul className="cursor-pointer flex items-center space-x-10 text-white">
          <Link to="/homepage" className="text-black">
            <li className="mx-2">Home</li>
          </Link>

          {/* About Us Dropdown for Desktop */}
          <div ref={dropdownRef} className="relative group text-black">
            <div
              className="flex items-center mx-2 cursor-pointer"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
            >
              About us
              <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-xs" />
            </div>
            {isAboutDropdownOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 min-w-[200px] z-50"
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link
                  to="/about/who-we-are"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Who We Are
                </Link>
                <Link
                  to="/about/our-mission"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Our Mission
                </Link>
              </div>
            )}
          </div>

          <Link to="/products" className="text-black">
            <li className="mx-2">Our Products</li>
          </Link>

          <Link to="/Career" className="text-black">
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-white bg-purple-800 font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out p-3"
          >
            Contact us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;