
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
      setOpenModal(!openModal);
    };

    return (
      <div className="fab-com-electronics bg-gray-900 text-white">
        {/* Desktop navigation */}
        <div className="bg-gray-800 hidden md:flex items-center justify-between px-4 py-4 shadow-md fab-com-navbar space-x-10">
          <span
            className="mx-2 flex items-center space-x-8 ml-auto"
            style={{ marginRight: "2rem" }}
          >
            <span className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2 ml-1" />
              Sample&Buy
            </span>

            <Link to="/Career" className="text-white">
              <span className="text-decoration-none flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Careers
              </span>
            </Link>
            {/* <IoMdMenu
              className="flex text-[2rem] mb-5 mr-2"
              onClick={toggleModal}
            /> */}
          </span>
        </div>

        {/* Mobile navigation */}

        {/* Mobile menu */}
        {openModal && (
          <div className="md:hidden bg-white absolute w-full h-full border-t-2 top-28">
            <div className="text-black flex flex-col w-full mx-10 my-10 space-y-4">
              <Link to="/homepage" className="block md:inline-block mr-4">
                Home
              </Link>
              <Link to="/products" className="block md:inline-block mr-4">
                Products
              </Link>
              <Link to="/about" className="block md:inline-block mr-4">
                About us
              </Link>
              <Link to="/ourservices" className="block md:inline-block mr-4">
                Our Services
              </Link>
              <Link to="/contact" className="block md:inline-block mr-4">
                Contact us
              </Link>
              <li className="mx-2 text-xl">
                <FontAwesomeIcon icon={faShoppingCart} />
              </li>
              <Link to="/login" className="text-white">
                <li className="mx-2 text-xl">
                  <FontAwesomeIcon icon={faUser} />
                </li>
              </Link>
            </div>
          </div>
        )}

        {/* The rest of your desktop navigation */}
        <div className="hidden md:flex justify-between items-center px-8 py-5 shadow-md fab-com-navbar">
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

