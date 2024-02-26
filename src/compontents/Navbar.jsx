
  import React, { useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faShoppingCart,
    faBars,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { IoMdMenu } from "react-icons/io";
  import { FaPhone } from "react-icons/fa";
  import { MdLocationPin } from "react-icons/md";
  import { MdOutlineMail } from "react-icons/md";

  import { Link } from "react-router-dom";

//  import { useTranslation } from "react-i18next";
 
 

  const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);

      const toggleModal = () => {
        setOpenModal((prev) => !prev);
      };

    return (
      <div className="fab-com-electronics bg-gray-900 text-white">
        {/* Desktop navigation */}

        <div className="bg-gray-800 hidden md:flex items-center justify-end px-4 py-4 shadow-md fab-com-navbar space-x-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MdOutlineMail className="text-gray-300"/>
              <span className="text-gray-300">fabtechhub@gmail.com</span>
              <FaPhone className="text-gray-300" />
              <span className="text-gray-300">+250 783 012 138</span>
              <MdLocationPin className="text-gray-300" />
              <span className="text-gray-300">Naples&Italy 240st</span>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=100088689596878"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f text-gray-300 text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/fabrice-itulamya-masumbuko-044478161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-gray-300 text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/lepieux_1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-gray-300 text-xl"></i>
            </a>
          </div>
        </div>

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
                to="/products"
                className="my-2 px-8 py-4 "
                onClick={toggleModal}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="my-2 px-8 py-4 "
                onClick={toggleModal}
              >
                About us
              </Link>
              <Link
                to="/ourservices"
                className="my-2 px-8 py-4 "
                onClick={toggleModal}
              >
                Our Services
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

              {/* <Link to="/Buy">
                <span className="my-2 px-8 py-4">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="mr-2 ml-1"
                  />
                  Sample&Buy
                </span>
              </Link> */}
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
            <Link to="/Career" className="text-white">
              <span className="text-decoration-none flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Careers
              </span>
            </Link>
            <Link to="/contact" className="text-white">
              <li className="mx-2 mr-8">Contact us</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  };

  export default Navbar;

