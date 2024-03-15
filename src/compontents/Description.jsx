import React from "react";
import { FaEye, FaCog, FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { PiLampBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div className="">
      <div
        class="flex items-center justify-center"
        style={{ marginTop: "8rem" }}
      >
        <div class="flex flex-col justify-left mr-10">
          <h2 class=" text-left text-4xl text-purple-800  mb-4 lg:ml-12">
            WH0 WE ARE
          </h2>
          <span class="block text-left text-3xl font-bold text-gray-800 mb-4 lg:ml-12">
            We Help To Innovate
          </span>
          <span class="block text-left text-base mb-4 lg:ml-12 lg:mt-10">
            We provide technology where innovation meets excellence! As a
            dynamic <br /> and forward-thinking technology company, we
            specialize in the seamless integration <br /> of hardware, software,
            and IoT solutions. And we envision a connected world where <br />{" "}
            cutting-edge technology enhances the way we live, work, and
            interact.
          </span>
          <Link to="/about">
            <span className="flex items-center ml-10 text-lg text-gray-800">
              <span className="mr-2 text-purple-800">See more information</span>
              <FaArrowRight size={20} className="text-purple-800" />
            </span>
          </Link>
        </div>

        <img
          src="https://media.istockphoto.com/id/1422478091/photo/close-up-of-a-hands-on-a-laptop-keyboard.jpg?s=612x612&w=0&k=20&c=TNGJooImQwsqodIC8vZB4e0r60RN989t0H9lmBmz60Y="
          class="w-full lg:w-2/5 mt-8  ml-12 lg:mt-0 rounded-lg"
        ></img>
      </div>

      {/* <div
        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-10"
        style={{ marginTop: "7rem" }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md  transition-transform transform hover:scale-105 cursor-pointer">
          <FaEye className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Vision</span>
          <p className="text-gray-500">
            To be the premier provider of comprehensive educational kits for
            engineering schools, empowering the next generation of innovators,
            while delivering cutting-edge engineering solutions to businesses
            globally. Our commitment extends beyond mere products; we strive to
            foster a culture of creativity, critical thinking, and collaboration
            ensuring that students and professionals alike are equipped with the
            skills and knowledge needed to thrive in an ever-evolving
            technological landscape.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <FaCog className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Value</span>
          <p className="text-gray-500">
            Excellence: We strive for excellence in all aspects of our
            operations, from the quality of our educational kits to the
            solutions we deliver to our clients. Innovation: We embrace
            innovation as the driving force behind progress, continuously
            seeking new and creative ways to enhance engineering education and
            solve complex challenges for our clients. Integrity: We uphold the
            highest standards of integrity in everything we do, fostering trust
            and transparency with our customers, partners, and employees.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <PiLampBold className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Mission</span>
          <p className="text-gray-500">
            Our mission is to revolutionize engineering education by offering
            dynamic educational kits that foster hands-on learning and practical
            skill development. Simultaneously, we are committed to providing
            top-tier engineering support to companies, specializing in web
            design, re design, and Internet of Things solutions. Through
            innovation, expertise, and a dedication to excellence, we aim to
            empower both students and businesses to thrive in a rapidly evolving
            technological landscape.
          </p>
        </div>
      </div> */}

      <div class="bg-white">
        <div class="p-8 ml-10">
          <span class="text-4xl font-bold block">What we do</span>
          <br />
          <span class="text-lg ">We design hardwares and innovate the youth</span>
        </div>

        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-7  ">
          <div class="bg-white shadow-md p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
            <img src="https://media.istockphoto.com/id/166103292/photo/electronic-technician-holding-tweezers-and-assemblin-a-circuit-board.jpg?s=612x612&w=0&k=20&c=RMEUBForljOSxMEf6OpOatLnpuhDv7CqVxAvKs2a_wM="></img>
            <span className="text-xl font-bold mb-4">Hardware Design</span>
            <p className="text-gray-600">
              We provide comprehensive hardware design services
              <br /> ensuring the swift and efficient resolution
            </p>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
            <img src="https://media.istockphoto.com/id/1488308267/photo/engineer-working-with-database-for-digital-data-design-or-cyberspace-network-and-connection.jpg?s=612x612&w=0&k=20&c=2uL7YiG8eXgNaf8Oaseiz7yXZaGi6p_JVGWp-QPUhrA="></img>
            <span className="text-xl font-bold mb-4">Software Development</span>
            <p className="text-gray-600">
              we provide the best of solutions of software development
              <br />
              mostly we do web applications and mobile apps for our clients
            </p>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img src="https://media.istockphoto.com/id/1347972947/photo/computer-technician-fixing-a-network-server-at-the-office.jpg?s=612x612&w=0&k=20&c=MAmJiYCgHyM4qkj4JZAsehB8hzbWAZnH7ZtA89EAaE4="></img>
            <span className="text-xl font-bold mb-4">Network Support</span>
            <p className="text-gray-600">
              Our network support services offer comprehensive assistance
              <br /> to optimize your network
            </p>
          </div>
        </div>
      </div>

      {/* Second row */}

      <div class="bg-white">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class="bg-white shadow-md p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
            <img src="https://media.istockphoto.com/id/1066995748/photo/repair-of-computer-hard-drives.jpg?s=612x612&w=0&k=20&c=LxlSulxNxVR5aeYLGBoilDFF59jt355j2GkYr4MTQPU="></img>
            <span className="text-xl font-bold mb-4">Laptop Repair</span>
            <p className="text-gray-600">
              We offer affrodable laptop repair services to indivudual and
              coporate clients ensuring budget-friendly solutions without
              compromising
            </p>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img src="https://media.istockphoto.com/id/1335050732/photo/businessman-using-a-computer-to-document-management-concept-online-documentation-database-and.jpg?s=612x612&w=0&k=20&c=5zAzuOclaBXMudc56RisW9yNyGxLt3wO8Xh2wtShmo0="></img>
            <span className="text-xl font-bold mb-4">Cloud Services</span>
            <p className="text-gray-600">
              A perfect way to store your data, our cloud services provide
              secure and reliable storage solutions designed to meet the demands
              of modern businesses.
            </p>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer ">
            <img src="https://media.istockphoto.com/id/1177116437/photo/innovation-and-science-concept.jpg?s=612x612&w=0&k=20&c=o1EXN6uyL91JlTGwGCdSiup_cjRYz6mRMwZPHTRI7QM="></img>
            <span className="text-xl font-bold mb-4">Smart integration</span>
            <p className="text-gray-600">
              Seamless integration is key to our approach, as we tailor smart
              solutions to seamlessly integrate with your existing systems
              optimizing performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
