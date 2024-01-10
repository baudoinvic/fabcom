import React from 'react'

const Footer = () => {
  return (
    <div class="bg-gray-100 p-8" id="Footer">
      <div class="flex justify-center">
        <div class="flex flex-wrap justify-center w-full md:w-9/12">
          <div class="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 class="font-bold mb-4">About FabTechHub</h2>
            <nav>
              <ul class="text-blue-500">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="Aboutus">About us</a>
                </li>
                <li>
                  <a href="products">our products</a>
                </li>
                <li>
                  <a href="careers">Careers</a>
                </li>
                <li>
                  <a href="">Get in touch &amp; with us</a>
                </li>
                <li>
                  <a href="ourservices">Our services</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 class="font-bold mb-4">Connect with us</h2>
            <nav>
              <ul class="text-blue-500">
                <li>
                  <a href="contact">Contact us</a>
                </li>
                <li>
                  <a href="#">Contact  &amp; the owner </a>
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
              <h2 class="font-bold mb-4">Subscribe to Our Newsletter</h2>
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