import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="career">
      <Navbar />
      <div className="">
        <header class="bg-purple-800 text-white py-32">
          <div class="container mx-auto flex items-center justify-between">
            <div class="w-1/2">
              <h1 class="text-4xl font-extrabold mb-4">
                Careers at FabTechHub
              </h1>
              <p class="text-lg leading-relaxed">
                Our mission is to build Africa’s large Quality Workforce and
                talent network that power the businesses’ productivity and
                growth while also creating digital jobs for African Talents. Our
                mission is a tool to address talent shortage and unemployment in
                the in-demand areas of the digital economy.
              </p>
            </div>

            <div class="w-1/2 flex justify-center">
              <img
                src="https://umurava.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flawyer.163770fa.png&w=384&q=75"
                alt="Desk illustration"
                class="max-w-full h-auto"
              />
            </div>
          </div>
        </header>

        <div class="container mx-auto my-8">
          <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-6">Current Job Openings</h2>

           

            <div class="space-y-6">
              <div class="border border-blue-500 rounded-md p-6 flex justify-between items-center shadow-md">
                <div class="flex items-center space-x-4">
                  <span class="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold text-sm">
                   Remote
                  </span>

                  <div>
                    <h3 class="text-lg font-bold text-blue-700">
                      Software Engineer
                    </h3>
                    <p class="text-gray-500 text-sm">2 years ago</p>
                    <p class="text-gray-700 mt-2">
                      We are seeking a talented software engineer to join our
                      innovative team. The ideal candidate will have experience
                      in web development and a passion for creating robust and
                      scalable solutions.
                    </p>
                  </div>
                </div>

                <div class="text-right space-y-2">
                  <a href="#" class="text-blue-500 underline text-sm block">
                    View Job Description
                  </a>
                  <button class="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
                    Apply
                  </button>
                </div>
              </div>

              <div class="border border-blue-500 rounded-md p-6 flex justify-between items-center shadow-md">
                <div class="flex items-center space-x-4">
                  <span class="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold text-sm">
                    Remote
                  </span>

                  <div>
                    <h3 class="text-lg font-bold text-blue-700">
                      Marketing Specialist
                    </h3>
                    <p class="text-gray-500 text-sm">2 years ago</p>
                    <p class="text-gray-700 mt-2">
                      Join our marketing team and help drive brand awareness and
                      customer engagement. The ideal candidate will have
                      experience in digital marketing, content creation, and
                      social media management.
                    </p>
                  </div>
                </div>

                <div class="text-right space-y-2">
                  <a href="#" class="text-blue-500 underline text-sm block">
                    View Job Description
                  </a>
                  <button class="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
                    Apply
                  </button>
                </div>
              </div>

              <div class="border border-blue-500 rounded-md p-6 flex justify-between items-center shadow-md">
                <div class="flex items-center space-x-4">
                  <span class="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold text-sm">
                    Remote
                  </span>

                  <div>
                    <h3 class="text-lg font-bold text-blue-700">
                      UI/UX Designer
                    </h3>
                    <p class="text-gray-500 text-sm">3 weeks ago</p>
                    <p class="text-gray-700 mt-2">
                      We are looking for a creative UI/UX Designer to enhance
                      user experiences through intuitive designs. You will
                      collaborate with our development team to create engaging
                      interfaces for our applications.
                    </p>
                  </div>
                </div>

                <div class="text-right space-y-2">
                  <a href="#" class="text-blue-500 underline text-sm block">
                    View Job Description
                  </a>
                  <button class="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/*add more cards*/}
          </section>

          {/*Benefits section*/}
          <section data-aos="zoom-in" class="mb-12 ml-4">
            <h2 class="text-2xl font-semibold mb-6">Why Choose Us?</h2>
            <ul class="list-disc list-inside">
              <li>Competitive salary</li>
              <li>Flexible work hours</li>
              <li>Health and wellness programs</li>
              {/*Add more benefits as needed*/}
            </ul>
          </section>

          {/*Application process*/}
          <section data-aos="zoom-in" class="mb-12 ml-4">
            <h2 class="text-2xl font-semibold mb-6">Application Process</h2>
            <p class="text-gray-700">
              To apply for a position, please follow these steps:
            </p>
            <ol class="list-decimal list-inside">
              <li>Review the current job openings above.</li>
              <li>Prepare your resume and cover letter.</li>
              <li>
                Submit your application through our online portal or send it to{" "}
                <a href="fabtechhub@gmail.com" class="text-purple-800">
                  info@fabtechhubgmail.com
                </a>
                .
              </li>
            </ol>
          </section>

          {/*Contact section*/}
          <section data-aos="zoom-in" class="ml-4">
            <h2 class="text-2xl font-semibold mb-6">Contact Us</h2>
            <p class="text-gray-700">
              For any inquiries related to careers, please contact us at{" "}
              <a href="fabtech@gmail.com" class="text-purple-800">
                info@fabtechhub@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Career