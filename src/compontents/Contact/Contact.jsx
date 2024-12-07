import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {

  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
     const fieldName = e.target.name;

    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let token = localStorage.getItem("token");
      console.log("Request Data:", formData);

      const response = await axios({
        url: "https://fabtechhub.onrender.com/FabtechHub/contacts/makecontact",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: JSON.stringify(formData),
      });

      console.log("Response Data:", response.data);
      toast.success("Thank you for your feedback");

        setFormData({
          Firstname: "",
          Lastname: "",
          email: "",
          phoneNumber: "",
          message: "",
        });

     
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to send message. Please try again later.");
    }
  };


  // it's end up by here //


  return (
    <div className="min-h-screen  ">
      <Navbar />

      <div className="container mx-auto px-4 py-12  ">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-8">
          {/* Contact Form - Left Side */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="Firstname"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="Firstname"
                    name="Firstname"
                    value={formData.Firstname}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your First Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="Lastname"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="Lastname"
                    name="Lastname"
                    value={formData.Lastname}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Last Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Phone Number"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Share with us your thoughts"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-800 text-white py-3 rounded-md hover:bg-purple-900 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information - Right Side */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
                  Contact Us
                </h2>
                <p className="text-gray-600 text-lg">
                  Have a project in mind that you think we'd be a great fit for?
                  We'd love to know what you're thinking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Address Card */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    <IoLocationOutline className="text-2xl text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Head Office</h3>
                  <p className="text-gray-600">KG 460 street, Kigali</p>
                </div>

                {/* Email Card */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    <MdOutlineMailOutline className="text-2xl text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600">info@fabtechhub.gmail.com</p>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    <FaPhoneAlt className="text-2xl text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Let's Talk</h3>
                  <p className="text-gray-600">+250 794 015 150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
