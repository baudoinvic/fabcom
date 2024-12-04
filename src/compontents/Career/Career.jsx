
import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Career = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (job) => {
    setModalData(job);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const jobs = [
    {
      title: "Software Engineer",
      location: "Remote",
      posted: "4 months ago",
      description:
        "We are seeking a talented software engineer to join our innovative team. The ideal candidate will have experience in web development and a passion for creating robust and scalable solutions.",
      detailedDescription:
        "Full job description: As a Software Engineer, you will design and develop robust web applications using React.js and Node.js. Collaborate with teams to deliver scalable and high-performing solutions. Enjoy a fully remote working environment with flexible schedules.",
      isClosed: true,
    },
    {
      title: "Marketing Specialist",
      location: "Remote",
      posted: "3 months ago",
      description:
        "Join our marketing team and help drive brand awareness and customer engagement. The ideal candidate will have experience in digital marketing, content creation, and social media management.",
      detailedDescription:
        "Full job description: Create and execute marketing strategies to enhance brand visibility. You will manage content, campaigns, and social media platforms. This role offers growth opportunities in a fast-paced environment.",
      isClosed: true,
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      posted: "3 weeks ago",
      description:
        "We are looking for a creative UI/UX Designer to enhance user experiences through intuitive designs. You will collaborate with our development team to create engaging interfaces for our applications.",
      detailedDescription:
        "Full job description: Work closely with developers to create user-centered designs for web and mobile applications. Must have expertise in design tools like Figma or Adobe XD. Remote working opportunities with flexible hours.",
      isClosed: false,
    },
  ];

  return (
    <div className="career">
      <Navbar />
      <div className="">
        <header className="bg-purple-800 text-white py-32">
          <div className="container mx-auto flex items-center justify-between">
            <div className="w-1/2">
              <h1 className="text-4xl font-extrabold mb-4">
                Careers at FabTechHub
              </h1>
              <p className="text-lg leading-relaxed">
                Our mission is to build Africa’s large Quality Workforce and
                talent network that power the businesses’ productivity and
                growth while also creating digital jobs for African Talents. Our
                mission is a tool to address talent shortage and unemployment in
                the in-demand areas of the digital economy.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img
                src="https://umurava.africa/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flawyer.163770fa.png&w=384&q=75"
                alt="Desk illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </header>

        <div className="container mx-auto my-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Current Job Openings
            </h2>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="border border-blue-500 rounded-md p-6 flex justify-between items-center shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-md font-semibold text-sm">
                      {job.location}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-purple-800">
                        {job.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{job.posted}</p>
                      <p className="text-gray-700 mt-2">{job.description}</p>
                    </div>
                  </div>

                  <div className="text-right space-y-2">
                    <button
                      onClick={() => openModal(job)}
                      className="text-purple-500 underline text-sm block"
                    >
                      View Job Description
                    </button>
                    {job.isClosed ? (
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md text-sm cursor-not-allowed"
                        disabled
                      >
                        Application Closed
                      </button>
                    ) : (
                      <button className="bg-purple-800 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
                        Apply
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {modalData && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md p-6 shadow-lg w-1/2">
            <h2 className="text-lg font-bold text-blue-700">
              {modalData.title}
            </h2>
            <p className="text-gray-500 mt-2">
              {modalData.detailedDescription}
            </p>
            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Career;
