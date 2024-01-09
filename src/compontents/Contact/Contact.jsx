import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className=" text-center text-gray-800" style={{ marginTop: "5rem" }}>
        <h2 className="text-4xl font-extrabold mb-6 text-blue-500">
          Contact Us
        </h2>
       
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <div
          className="bg-white p-8 rounded shadow-md"
          style={{ marginTop: "-14rem", width: "800px" }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your First Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Last Name"
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
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </div>
      </div>
      <div className="items-center p-4" style={{ marginTop: "-8rem" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30607.79514638295!2d30.066595630129367!3d-1.9550632439832505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssp rwanda!5e0!3m2!1sen!2srw!4v1663256798141!5m2!1sen!2srw"
          width="1550px"
          height="600px"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
