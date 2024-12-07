import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Iot = () => {
  return (
    <div className="">
      <Navbar />
   

      <div className="pt-16 px-4 md:px-10 mb-32 md:mb-64">
        <div className="flex flex-col lg:flex-row mt-8 items-center lg:items-start gap-8">
          <div className="relative lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full sm:w-3/4 lg:w-128 h-48 sm:h-60 md:h-80 object-cover rounded-lg shadow-lg border border-solid border-gray-500"
              src="https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/iot-coverage-2.jpg?rev=4fa2eb28f841448c9d126f911019398f"
              alt="Large Background"
            />

            <img
              className="absolute bottom-[-60px] left-[10px] sm:bottom-[-80px] sm:left-[20px] w-2/5 sm:w-1/3 rounded-lg border border-gray-500 shadow-lg"
              src="https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/iot-coverage-2.jpg?rev=4fa2eb28f841448c9d126f911019398f"
              alt="Small Foreground"
            />
          </div>

          <div className="lg:w-1/2 text-gray-600 space-y-4 text-center lg:text-left mt-16">
            <span className="text-purple-800 font-bold text-sm md:text-lg">
              Internet of Things
            </span>
            <p className="text-sm sm:text-base leading-relaxed">
              The Internet of Things, simply known as IoT, is the latest
              buzzword in technology. Although it has been around for quite some
              time now, the advancements made over the past few years are
              undeniable. If this is the first time you’re coming across the
              term IoT, then it might not sound like something huge. However,
              this technology can turn something as small as a pill into a super
              huge machine. As the latest technology trends take center stage,
              it’s important that you keep yourself up-to-date to enjoy whatever
              comes with them. This article aims to discuss all you need to know
              about the Internet of Things. The word “internet” basically means
              an interconnection of many supercomputers through a set of
              pre-defined protocols. Therefore, as the name suggests, the
              Internet of Things is an interconnection of several
              internet-enabled physical devices. In other words, anything that
              has an assigned IP address can be included in this ecosystem.
              These smart gadgets have the ability to transfer data over the
              internet to any connected receiver without the help of a human.
            </p>
          </div>

         
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Iot