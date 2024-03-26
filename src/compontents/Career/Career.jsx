import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="career">
      <Navbar />
      <div className="">
        <header data-aos="zoom-in" class="bg-gray-800 text-white py-8">
          <div class="container mx-auto text-center">
            <h1 class="text-3xl font-extrabold">Join Our Team</h1>
            <p class="text-lg">Explore exciting career opportunities with us</p>
          </div>
        </header>

        <div class="container mx-auto my-8">
          {/*job listing*/}
          <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-6">Current Job Openings</h2>

            {/*job cards*/}

            <div data-aos="zoom-in" class="bg-white p-6 rounded-md  mb-6">
              <h3 class="text-xl font-semibold mb-2">Software Engineer</h3>
              <p class="text-gray-700 mb-4">
                We are seeking a talented software engineer to join our
                innovative team. The ideal candidate will have experience
                <br></br> in web development and a passion for creating robust
                and scalable solutions.
              </p>
              <p class="text-gray-500">
                Qualifications: Bachelor's degree in Computer Science, 3+ years
                of experience in full-stack development.
              </p>
              <Link to="/apply">
                <a href="#" class="text-purple-800 mt-4 inline-block">
                  Apply Now
                </a>
              </Link>
            </div>

            <div data-aos="zoom-in" class="bg-white p-6 rounded-md  mb-6">
              <h3 class="text-xl font-semibold mb-2">Marketing Specialist</h3>
              <p class="text-gray-700 mb-4">
                Join our marketing team and help drive brand awareness and
                customer engagement.<br></br> The ideal candidate will have
                experience in digital marketing, content creation, and social
                media management.
              </p>
              <p class="text-gray-500">
                Qualifications: Bachelor's degree in Marketing, 2+ years of
                experience in digital marketing.
              </p>

              <Link to="/apply">
                <a href="#" class="text-purple-800 mt-4 inline-block">
                  Apply Now
                </a>
              </Link>
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