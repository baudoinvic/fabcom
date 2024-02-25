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
      toast.success("Thank you for subscribing!");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to subscribe. Please try again later.");
    }
  };


  return (
    // <footer class="bg-gray-800 p-8">
    //   <div class="container mx-auto">
    //     <div class="flex flex-wrap justify-center">
    //       <div class="w-full md:w-1/2 lg:w-1/4">
    //         <h2 class="text-white font-bold mb-4">About FabTechHub</h2>
    //         <nav>
    //           <ul class="text-blue-500">
    //             <li>
    //               <a href="/homepage">Home</a>
    //             </li>
    //             <li>
    //               <a href="/about">About us</a>
    //             </li>
    //             <li>
    //               <a href="/products">Our products</a>
    //             </li>
    //             <li>
    //               <a href="/career">Careers</a>
    //             </li>
    //             <li>
    //               <a href="/contact">Get in touch with us</a>
    //             </li>
    //             <li>
    //               <a href="/ourservices">Our services</a>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>

    //       <div class="w-full md:w-1/2 lg:w-1/4">
    //         <h2 class="text-white font-bold mb-4">Connect with us</h2>
    //         <nav>
    //           <ul class="text-blue-500">
    //             <li>
    //               <a href="/contact">Contact us</a>
    //             </li>
    //             <li>
    //               <a href="https://www.linkedin.com/in/fabrice-itulamya-masumbuko-044478161/">
    //                 Contact the owner
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://maps.app.goo.gl/3MyetuoWSYdzTF4L8">
    //                 Our office
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://maps.app.goo.gl/xnbi2ChsSfgWUb9s5">
    //                 Our branch
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://maps.app.goo.gl/3MyetuoWSYdzTF4L8">
    //                 Location
    //               </a>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>

    //       <div class="w-full md:w-1/2 lg:w-1/4">
    //         <h2 class="text-white font-bold mb-4">Follow us</h2>
    //         <nav>
    //           <ul class="flex gap-4">
    //             <li>
    //               <a href="https://www.facebook.com/profile.php?id=100088689596878">
    //                 <CiFacebook class="text-blue-500 text-3xl" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://www.instagram.com/lepieux_1/">
    //                 <FaInstagram class="text-blue-500 text-3xl" />
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://www.linkedin.com/in/fabrice-itulamya-masumbuko-044478161/">
    //                 <FaLinkedin class="text-blue-500 text-3xl" />
    //               </a>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>

    //       <div class="w-full md:w-1/2 lg:w-1/4">
    //         <h2 class="text-white font-bold mb-4">
    //           Subscribe to Our Newsletter
    //         </h2>
    //         <form onClick={handleSubmit} action="#" class="subscription-form">
    //           <div class="flex items-center">
    //             <input
    //               type="text"
    //               name="email"
    //               value={email}
    //               onChange={handleChange}
    //               id="placenewsletter"
    //               placeholder="Your email address"
    //               class="border border-gray-300 rounded-md py-2 px-3 mr-2"
    //             />
    //             <button
    //               type="submit"
    //               class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md"
    //               id="subscription-submit"
    //             >
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //         <ToastContainer />
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row ml-10">
            <h1>Subsribe to Our Newsletter</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="flex items-center space-x-2 mt-5 ml-10">
            <input
              type="text"
              placeholder="Enter email address"
              className="w-80 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <i className="fa fa-paper-plane text-gray-500"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding ml-10">
          <div className="box logo">
            <h1>FabTechHub</h1>
            <span>We are here</span>
            <p>
              to help you to solve the problems in your company and make it in
              very big high level
            </p>

            <div className="flex items-center space-x-4">
              <i className="fab fa-facebook-f text-blue-600 hover:text-blue-800 text-lg"></i>
              <i className="fab fa-twitter text-blue-400 hover:text-blue-600 text-lg"></i>
              <i className="fab fa-instagram text-pink-600 hover:text-pink-800 text-lg"></i>
            </div>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>

          <div className="box link">
            <h3>Address</h3>
            <ul>
              <li>Congo Drc</li>
              <li>Kalemie 240 street</li>
              <li>Terms & Conditions</li>
              <li>Tanganyika Province</li>
              <li>Kalemie city</li>
            </ul>
          </div>

          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                institut. Technique, International,lepieux, DRC
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +250783012138
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                lepieuxinternationalschool.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | This site is made with{" "}
          <i className="fa fa-heart"></i> by BaudoinCoder
        </p>
      </div>
    </>
  );
}

export default Footer