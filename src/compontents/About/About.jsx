import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div class="">
      <Navbar />
      <div class="relative">
        <img
          class="w-full object-cover shadow-md"
          style={{ height: "560px" }}
          src="https://fablab.rw/wp-content/uploads/2022/09/fablab-scaled.jpg"
          alt="Description"
        />

        <div class="absolute inset-0 flex flex-col items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 mt-8 md:mt-16">
          <span class="font-bold text-white mb-4 max-w-3/4 animate-moveText text-lg md:text-2xl lg:text-3xl">
            Welcome to FabTech Hub, <br /> where innovation meets excellence. As
            a dynamic <br /> and forward-thinking technology company
          </span>

          <Link to="/Ourservices">
            <button class="px-4 py-4 bg-[#02010130] text-white font-bold rounded hover:bg-black-100 md:mr-16">
              See our services
            </button>
          </Link>
        </div>
      </div>

   

      <div class="flex flex-col md:flex-row md:mr-3 md:ml-3 md:mt-7 shadow-md">
        <div class="w-full md:w-1/2 p-8">
          <h1 class="text-gray-800 text-3xl font-bold mb-4">About us</h1>
          <p class="mb-4 text-base text-gray-500">
            Welcome to FabTech Hub, where innovation meets excellence! As a
            dynamic and forward-thinking technology company, we specialize in
            the seamless integration of hardware, software, and IoT solutions.
            Our Vision: At FabTech Hub, we envision a connected world where
            cutting-edge technology enhances the way we live, work, and
            interact. Our goal is to be at the forefront of this transformation,
            driving innovation through the convergence of hardware, software,
            and IoT. Expertise in Hardware Design: Our team of highly skilled
            hardware engineers is dedicated to crafting state-of-the-art devices
            that not only meet but exceed industry standards. From concept to
            prototype to final production, we leverage the latest technologies
            to design robust and efficient hardware solutions. We ensure that
            our hardware stands out in terms of performance, durability, and
            user experience.
          </p>

          <p class="mb-4 text-base text-gray-500">
            Pioneering Software Development: Software is the heart and soul of
            any technological ecosystem, and at FabTech Hub, we take pride in
            our software development prowess. Our team of software engineers is
            adept at creating custom applications, firmware, and operating
            systems that seamlessly integrate with our hardware offerings. We
            believe in user-centric design, ensuring that our software solutions
            are not only powerful but also intuitive and user-friendly.
            Innovative IoT Solutions: The Internet of Things (IoT) has
            revolutionized the way devices communicate and interact. At FabTech
            Hub, we harness the potential of IoT to create intelligent and
            connected ecosystems. From smart home devices to industrial IoT
            solutions, we design and develop systems that enable seamless
            connectivity, data exchange, and automation. Our IoT solutions are
            geared towards enhancing efficiency, optimizing processes, and
            providing valuable insights through real-time data analytics.
            Customer-Centric Approach: At the core of our company is a
            commitment to customer satisfaction. We work closely with our
            clients to understand their unique needs and challenges, tailoring
            our hardware, software, and IoT solutions to meet and exceed
            expectations. Our dedication to quality, reliability, and continuous
            improvement ensures that our products and services stand the test of
            time. A Tradition of Excellence: With a legacy of innovation and a
            passion for pushing technological boundaries, FabTech Hub has
            established itself as a reliable partner for businesses and
            individuals seeking comprehensive solutions. We pride ourselves on
            our ability to stay ahead of the curve, anticipating future trends
            and adapting our offerings to meet the evolving needs of the digital
            age. Join us on the journey of transforming ideas into reality, as
            we continue to design the future through the seamless integration of
            hardware, software, and IoT at FabTech Hub.
          </p>
        </div>
        <div class="w-full md:w-1/2 mt-7 flex justify-center items-center" style={{marginTop: '-2rem'}}>
          <div class="aspect-w-16 aspect-h-9">
            <video controls class="w-full h-full" width="full" height="560">
              <source src="/anima.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About