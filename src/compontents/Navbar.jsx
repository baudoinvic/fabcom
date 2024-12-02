
  import React, { useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faShoppingCart,
    faBars,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { IoMdMenu } from "react-icons/io";
 
  import { Link } from "react-router-dom";


  const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

      const toggleModal = () => {
        setOpenModal((prev) => !prev);
      };

    return (
      <div className="fab-com-electronics text-white  ">
        {/* Desktop navigation */}

        <div className=" hidden md:flex items-center justify-end px-4 py-2 shadow-md fab-com-navbar space-x-10 "></div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden flex items-center justify-end px-4 py-4 bg-gray-800 text-white`}
        >
          {/* Menu Icon */}
          <IoMdMenu
            className="text-[2rem] cursor-pointer"
            onClick={toggleModal}
          />
        </div>

        {/* Mobile navigation menu */}
        {openModal && (
          <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-55 z-50">
            <div className="flex justify-end p-4">
              {/* Close Icon */}
              <IoMdMenu
                className="text-[2rem] text-white cursor-pointer"
                onClick={toggleModal}
              />
            </div>
            <div className="flex flex-col items-stretch text-white">
              <Link
                to="/homepage"
                className="my-2 px-8 py-4 "
                onClick={toggleModal}
              >
                Home
              </Link>

              <Link
                to="/about"
                className="my-2 px-8 py-4 "
                onClick={toggleModal}
              >
                About us
              </Link>

              <Link
                to="/products"
                className="my-2 px-8 py-4 "
                onClick={toggleModal}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="my-2 px-8 py-4 "
                onClick={toggleModal}
              >
                Contact us
              </Link>

              <Link to="/Career" className="my-2 px-8 py-4">
                <span className="text-decoration-none flex items-center">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Careers
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* The rest of your desktop navigation */}
        <div className="hidden md:flex justify-between items-center px-8 py-5 shadow-md fab-com-navbar bg-white">
          <Link to="/homepage" className="text-black">
            FabTechHub
          </Link>

          <ul className="cursor-pointer flex items-center space-x-10 text-white">
            <Link to="/homepage" className="text-black">
              <li className="mx-2">Home</li>
            </Link>

            <Link to="/about" className="text-black">
              <li className="mx-2">About us</li>
            </Link>

            <Link to="/products" className="text-black">
              <span className="flex items-center">
                <li className="mx-2">Our Products</li>
              </span>
            </Link>

            <Link to="/Career" className="text-black">
              <span className="text-decoration-none flex items-center">
                Careers
              </span>
            </Link>
            <Link
              to="/contact"
              className="text-white bg-purple-800 font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out p-3"
            >
              <li className="mx-2 mr-8">Contact us</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  };

  export default Navbar;

