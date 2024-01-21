import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";




const Contact = () => {

//sending information by filling the form//


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
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      toast.error("Failed to send message. Please try again later.");
    }
  };


  // it's end up by here //


  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="text-center text-gray-800 mt-10">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
          Contact Us
        </h2>
      </div>

      <div
        className="min-h-screen flex items-center justify-center"
        style={{ marginTop: "-2rem" }}
      >
        <div className="bg-white p-8 rounded shadow-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="Firstname"
                  name="Firstname"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your First Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Lastname"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lastname"
                  name="Lastname"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Last Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
             
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Send Message
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
        
      <div className="items-center p-4 mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30607.79514638295!2d30.066595630129367!3d-1.9550632439832505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssp rwanda!5e0!3m2!1sen!2srw!4v1663256798141!5m2!1sen!2srw"
          width="100%"
          height="600px"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
