import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div class="bg-gray-800 p-8" id="Footer">
      <div class="flex justify-center">
        <div class="flex flex-wrap justify-center w-full md:w-9/12">
          <div class="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 class="text-white font-bold mb-4">About FabTechHub</h2>
            <nav>
              <ul class="text-blue-500">
                <li>
                  <a href="">Home</a>
                </li>

                <Link to="/About">
                  <li>
                    <a href="">About us</a>
                  </li>
                </Link>

                <Link to="/products">
                  <li>
                    <a href="">our products</a>
                  </li>
                </Link>

                <Link to="/career">
                  <li>
                    <a href="">Careers</a>
                  </li>
                </Link>

                <li>
                  <a href="">Get in touch &amp; with us</a>
                </li>
                <Link to="/ourservices">
                  <li>
                    <a href="">Our services</a>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 class="text-white font-bold mb-4">Connect with us</h2>
            <nav>
              <ul class="text-blue-500">
                <Link to="/contact">
                  <li>
                    <a href="">Contact us</a>
                  </li>
                </Link>

                <li>
                  <a href="#">Contact &amp; the owner </a>
                </li>
                <li>
                  <a href="#">our offices</a>
                </li>
                <li>
                  <a href="#">our branch</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3">
            <div id="subscriptionContainer" class="mb-8">
              <h2 class="text-white font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <form action="#" class="subscription-form">
                <div class="flex items-center">
                  <input
                    type="text"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer