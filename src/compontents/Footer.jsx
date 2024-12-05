

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You need to be logged in to subscribe.");
        return;
      }

      console.log("Newsletter Subscription Email:", email);

      const response = await axios.post(
        "https://fabtechhub.onrender.com/FabtechHub/subscribes/makeSubscribe",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Subscription Response Data:", response.data);
        toast.success("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        toast.error("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div>
      <footer className="bg-white text-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-purple-800">FabTechHub</h1>
              <p>
                We are here to help you solve the problems in your company and
                elevate it to a very high level.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><Link to="/homepage" className="hover:text-blue-500 transition">Home</Link></li>
                <li><Link to="/Provider" className="hover:text-blue-500 transition">Who We Are</Link></li>
                <li><Link to="/products" className="hover:text-blue-500 transition">Our Products</Link></li>
                <li><Link to="/career" className="hover:text-blue-500 transition">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li><Link to="/products/educational-kit" className="hover:text-blue-500 transition">Educational Kit</Link></li>
                <li><Link to="/products/network-deployment" className="hover:text-blue-500 transition">Network Deployment</Link></li>
                <li><Link to="/products/iot" className="hover:text-blue-500 transition">Internet of Things</Link></li>
                <li><Link to="/automatic" className="hover:text-blue-500 transition">Automatic Fare Collection</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact & Newsletter</h3>
              <div className="space-y-2 mb-4">
                <p className="flex items-center">
                  <i className="fa fa-map mr-2 text-purple-800"></i>
                  Rwanda Kigali 640 Street
                </p>
                <p className="flex items-center">
                  <i className="fa fa-phone-alt mr-2 text-purple-800"></i>
                  +250 782 012 140
                </p>
                <p className="flex items-center">
                  <i className="fa fa-paper-plane mr-2 text-purple-800"></i>
                  info@fabtechhubgmail.com
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  id='email'
                  value={email}
                  onChange={handleChange}
                  placeholder="Subscribe to our newsletter"
                  className="w-full px-3 py-2 text-black border border-gray-500 rounded-l-md"
                  required
                />
                <button
                  type="submit"
                  className="bg-purple-800 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Submit
                </button>
                <ToastContainer />
              </form>

              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl text-purple-800" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-purple-800" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-purple-800" />
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
};

export default Footer;
