
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
      
      <div
        className={`md:hidden flex items-center justify-between px-4 py-4 bg-gray-800 text-white`}
      >
        <Link to="/homepage" className="text-white font-bold c">
          Fab<span className="text-purple-800">TechHub</span>
        </Link>
        
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
        <div className="md:hidden fixed inset-0 bg-gray-800 z-50 overflow-y-auto ">
          <div className="flex flex-col items-stretch text-white ">
            <Link
              to="/homepage"
              className="my-2 px-8 py-4 border-b border-gray-700 "
              onClick={toggleModal}
            >
              Home
            </Link>

            {/* About Us Dropdown for Mobile */}
            <div className="relative">
              <div
                className="my-2 px-8 py-4 border-b border-gray-700 flex justify-between items-center cursor-pointer"
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

              <div className="bg-gray-700">
                <Link
                  to="/provider"
                  className="block px-12 py-3 hover:bg-gray-600"
                  onClick={() => {
                    toggleModal();
                    setIsAboutDropdownOpen(false);
                  }}
                >
                  Who We Are
                </Link>
                <Link
                  to="/Mission"
                  className="block px-12 py-3 hover:bg-gray-600"
                  onClick={() => {
                    toggleModal();
                    setIsAboutDropdownOpen(false);
                  }}
                >
                  Our Mission
                </Link>
              </div>
            </div>

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
              Careers
            </Link>
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <div className="hidden md:flex justify-between items-center px-8 py-5 shadow-lg fab-com-navbar bg-white ">
        <Link to="/homepage" className="text-black font-bold">
          FabTechHub
        </Link>

        <ul className="cursor-pointer flex items-center space-x-10 text-white">
          <Link to="/homepage" className="text-black">
            <li className="mx-2">Home</li>
          </Link>

          <div ref={dropdownRef} className="relative group text-black">
            <div
              className="flex items-center mx-2 cursor-pointer"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
            >
              About us
            </div>
            {isAboutDropdownOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 min-w-[200px] z-50"
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <Link
                  to="/provider"
                  className="block px-4 py-2 text-black hover:bg-gray-100"
                >
                  Who We Are
                </Link>
                <Link
                  to="/Mission"
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