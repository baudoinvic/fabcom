import React from 'react'
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState} from 'react';
import "@fortawesome/fontawesome-free/css/all.css";

import "./Footer.css";

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
      toast.success("Thank you for subscribing");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to subscribe. Please try again later.");
    }
  };


  return (
    <div className="Fab-footer">
      <section className="newletter bg-purple-800">
        <div className="container flexSB">
          <div className="left row ml-10">
            <h1>Subsribe to Our Newsletter</h1>
            <span>To stay updated with our events and information</span>
          </div>

        
          <form onSubmit={handleSubmit} className="subscription-form">
            <div className="flex items-center space-x-2 mt-5 ml-10">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                required
                placeholder="Enter email address"
                className="w-80 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
              />
              <button
                type="submit"
                className="fa fa-paper-plane text-gray-900 cursor-pointer bg-white p-3"
              ></button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </section>
      <footer>
        <div className="container padding ml-6 ">
          <div className="box logo">
            <h1>FabTechHub</h1>
            <span>We are here</span>
            <p>
              To help you solve the problems in your company and elevate it to a
              very high level.
            </p>
            <span>Follow us on</span>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100088689596878"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-gray-800 text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/fabrice-itulamya-masumbuko-044478161/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-gray-800 text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/lepieux_1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-gray-800 text-xl"></i>
              </a>
            </div>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <Link to="/homepage">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link to="/our services">
                <li>Services</li>
              </Link>
              <Link to="/products">
                <li>Our products</li>
              </Link>
              <Link to="/career">
                <li>Careers</li>
              </Link>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <Link to="/contact">
                <li>Contact Us</li>
              </Link>

              <li>
                <a href="https://www.linkedin.com/in/fabrice-itulamya-masumbuko-044478161/">
                  Contact the owner
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/3MyetuoWSYdzTF4L8">
                  Our office
                </a>
              </li>

              <li>
                <a href="https://maps.app.goo.gl/xnbi2ChsSfgWUb9s5">
                  Our branch
                </a>
              </li>

              <li>
                <a href="https://maps.app.goo.gl/3MyetuoWSYdzTF4L8">Location</a>
              </li>
            </ul>
          </div>

          <div className="box link">
            <h3>Address</h3>
            <ul>
              <li>Naples & Italy</li>
              <li>Rwanda & kigali</li>
              <li>kimirhura 160 St</li>
              <li>Kigali Province</li>
              <li>Kigali city</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Fabtechhub technology
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +250783012138
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                info@fabtechhubgmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal bg-white">
        <p>
          Copyright ©2024 All rights reserved | This site is made with{" "}
          <i className="fa fa-heart"></i> by BaudoinCoder
        </p>
      </div>
    </div>
  );
}

export default Footer