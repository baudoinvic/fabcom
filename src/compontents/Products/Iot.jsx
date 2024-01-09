import React from 'react'

const Iot = () => {
  return (
    <div>
      <Navbar />

      <div className="ml-10 mr-5">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          Internet of Things
        </h1>
      </div>

      <div className=" flex ml-10 mr-10 shadow-md">
        <div className="w-1/2">
          <span className="mr-4 mt-4">
            The Internet of Things, simply known as IoT, is the latest buzzword
            in technology. Although it has been around for quite some time now,
            the advancements made over the past few years are undeniable. If
            this is the first time you’re coming across the term IoT, then it
            might not sound like something huge. However, this technology can
            turn something as small as a pill into a super huge machine. As the
            latest technology trends take center stage, it’s important that you
            keep yourself up-to-date to enjoy whatever comes with them. This
            article aims to discuss all you need to know about the Internet of
            Things. The word “internet” basically means an interconnection of
            many supercomputers through a set of pre-defined protocols.
            Therefore, as the name suggests, the Internet of Things is an
            interconnection of several internet-enabled physical devices. In
            other words, anything that has an assigned IP address can be
            included in this ecosystem. These smart gadgets have the ability to
            transfer data over the internet to any connected receiver without
            the help of a human.
          </span>
        </div>
        <div className="w-1/2 ml-10">
          <img
            src="https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/iot-coverage-2.jpg?rev=4fa2eb28f841448c9d126f911019398f"
            alt="Iot"
            className="w-4/5 h-auto"
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Iot