import React from 'react'
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {


  return (
    <div className="">
      <footer className="bg-white text-gray-900  py-12">
        <div className="container mx-auto px-4  ">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-blue-500">FabTechHub</h1>

              <p className="text-gray-900">
                We are here To help you solve the problems in your company and
                elevate it to a very high level.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/homepage"
                    className="hover:text-blue-500 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-500 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-blue-500 transition"
                  >
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="hover:text-blue-500 transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/educational-kit"
                    className="hover:text-blue-500 transition"
                  >
                    Educational Kit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/network-deployment"
                    className="hover:text-blue-500 transition"
                  >
                    Network Deployment
                  </Link>
                </li>
                <li>
                  <Link to="/iot" className="hover:text-blue-500 transition">
                    Internet of Things
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fare-collection"
                    className="hover:text-blue-500 transition"
                  >
                    Automatic Fare Collection
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact & Newsletter
              </h3>

              <div className="space-y-2 mb-4">
                <p className="flex items-center">
                  <i className="fa fa-map mr-2 text-blue-500"></i>
                  Rwanda Kigali 640 Street
                </p>
                <p className="flex items-center">
                  <i className="fa fa-phone-alt mr-2 text-blue-500"></i>
                  +250 782 012 140
                </p>
                <p className="flex items-center">
                  <i className="fa fa-paper-plane mr-2 text-blue-500"></i>
                  info@fabtechhubgmail.com
                </p>
              </div>

              <form className="flex">
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="w-full px-3 py-2 text-white  border border-solid border-gray-500 rounded-l-md  "
                  required
                />
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Submit
                </button>
              </form>

              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition"
                >
                  <FaFacebook className="text-2xl" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500">
            © {new Date().getFullYear()} FabTechHub. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer