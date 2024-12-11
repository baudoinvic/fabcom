import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const WebApp = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-16 px-4 md:px-10 mb-32 md:mb-64">
        <span className="text-purple-800 font-bold text-sm md:text-lg">
          Web Applications
        </span>

        <div className="flex flex-col lg:flex-row mt-8 items-center lg:items-start gap-8">
        
          <div className="lg:w-1/2 text-gray-600 space-y-4">
            <p className="text-sm md:text-base leading-relaxed">
              The fundamental purpose of all web applications is to facilitate
              the completion of one or more tasks. To reiterate the themes of
              dance and conversation introduced in my last column, truly
              superior interaction design strikes a delicate balance between the
              needs and expectations of users and the capabilities and
              limitations of technology. The ability to consistently find
              solutions that achieve this balance in a manner appropriate to the
              medium is a hallmark of an experienced interaction designer.
            </p>
          </div>

          <div className="relative lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full md:w-3/4 lg:w-128 h-60 md:h-80 object-cover rounded-lg shadow-lg border border-solid border-gray-500"
              src="https://media.istockphoto.com/id/1054541696/vector/online-product-presentation-with-project-team.jpg?s=612x612&w=0&k=20&c=ghVD5anU2Z5NPx1xdqIE6iTVDsNgwe2d3LzTAtaR7zM="
              alt="Large Background"
            />
            <img
              className="absolute bottom-[-100px] left-[10px] md:bottom-[-150px] md:left-[30px] w-2/5 md:w-1/3 rounded-lg border border-gray-500 shadow-lg"
              src="https://media.istockphoto.com/id/1054541696/vector/online-product-presentation-with-project-team.jpg?s=612x612&w=0&k=20&c=ghVD5anU2Z5NPx1xdqIE6iTVDsNgwe2d3LzTAtaR7zM="
              alt="Small Foreground"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WebApp