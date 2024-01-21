import React from 'react'
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState} from 'react';

const Footer = () => {


   

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let token = localStorage.getItem("token");
      console.log("Newsletter Subscription Email:", email);

      const response = await axios({
        url: "https://fabtechhub.onrender.com/FabtechHub/subscribes/makeSubscribe",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify({ email }),
      });

      console.log("Subscription Response Data:", response.data);
      toast.success("Thank you for subscribing!");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to subscribe. Please try again later.");
    }
  };










  return (
    <footer class="bg-gray-800 p-8">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-1/2 lg:w-1/4">
            <h2 class="text-white font-bold mb-4">About FabTechHub</h2>
            <nav>
              <ul class="text-blue-500">
                <li>
                  <a href="/homepage">Home</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/products">Our products</a>
                </li>
                <li>
                  <a href="/career">Careers</a>
                </li>
                <li>
                  <a href="/contact">Get in touch with us</a>
                </li>
                <li>
                  <a href="/ourservices">Our services</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/4">
            <h2 class="text-white font-bold mb-4">Connect with us</h2>
            <nav>
              <ul class="text-blue-500">
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="#">Contact the owner</a>
                </li>
                <li>
                  <a href="#">Our offices</a>
                </li>
                <li>
                  <a href="#">Our branch</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/4">
            <h2 class="text-white font-bold mb-4">Follow us</h2>
            <nav>
              <ul class="flex gap-4">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100088689596878">
                    <CiFacebook class="text-blue-500 text-3xl" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/lepieux_1/">
                    <FaInstagram class="text-blue-500 text-3xl" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/fabrice-itulamya-masumbuko-044478161/">
                    <FaLinkedin class="text-blue-500 text-3xl" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/4">
            <h2 class="text-white font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <form onClick={handleSubmit} action="#" class="subscription-form">
              <div class="flex items-center">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  id="placenewsletter"
                  placeholder="Your email address"
                  class="border border-gray-300 rounded-md py-2 px-3 mr-2"
                />
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md"
                  id="subscription-submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer