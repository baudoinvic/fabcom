import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const WebApp = () => {
  return (
    <div >
      <Navbar />

      <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-32">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          Web Applications
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row mx-4 md:mx-10 lg:mx-20 xl:mx-32 ">
        <div className="w-full lg:w-1/2 lg:mr-5">
          <span className="mr-4 mt-4">
            The fundamental purpose of all web applications is to facilitate the
            completion of one or more tasks. To reiterate the themes of dance
            and conversation introduced in my last column, truly superior
            interaction design strikes a delicate balance between the needs and
            expectations of users and the capabilities and limitations of
            technology. The ability to consistently find solutions that achieve
            this balance in a manner appropriate to the medium is a hallmark of
            an experienced interaction designer.
          </span>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-5">
          <img
            src="https://assets.materialup.com/uploads/5afb8065-ef8d-4a57-a627-8a87da96ca1c/preview.jpg"
            alt="web app design"
            className="w-full h-auto"
          />
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
}

export default WebApp