import React from 'react'

const Product = () => {
  return (
    <div
      class="relative text-center  object-cover shadow-lg"
      style={{ marginTop: "4rem" }}
    >
      <img
        src="https://www.st.com/content/dam/crew/solar-panel-blue-sky.jpg"
        style={{ width: "104rem", height: "890px" }}
        alt="Robot Factory Image"
      ></img>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white mt-5">
        <div className="text-center">
          <p className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-white">
            Products & Innovations for You
          </p>
          <p className="text-base lg:text-lg xl:text-xl mt-5 text-white">
            Smart Mobility
          </p>
          <p className="text-base lg:text-lg xl:text-xl mt-5 text-white">
            Power & Energy
          </p>
          <p className="text-base lg:text-lg xl:text-xl mt-5 text-white">
            Cloud-connected Autonomous Things
          </p>
        </div>

        <div className="text-center mt-5 md:text-left md:ml-4">
          {/* <div
            className="text-center  md:text-left md:ml-4"
            style={{ marginTop: "-2rem" }}
          >
            <p className="text-3xl lg:text-2xl xl:text-3xl font-bold text-white mt-2">
              Smart Mobility
            </p>
            <p className="text-base lg:text-lg xl:text-xl mt-5 text-white">
              We are supporting the proliferation of secure, connected,
              autonomous devices enabled by edge AI.
            </p>
          </div> */}

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <video
                style={{ width: "100%", height: "auto", maxWidth: "500px" }}
                className="object-cover"
                autoPlay
                muted
                loop
              >
                <source src="/techVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-black bottom-0 left-0 w-full bg-white p-2">
                <p>Explore the new features of our Teseo</p>
                <p>GNSS modules for specific applications with </p>
                <p>quick and seamless development tools</p>
              </div>
            </div>
            <div className="relative">
              <video
                style={{ width: "100%", height: "auto", maxWidth: "500px" }}
                className="object-cover"
                autoPlay
                muted
                loop
              >
                <source src="/anima.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-black bottom-0 left-0 w-full bg-white p-2">
                <p>Explore the new features of our Teseo</p>
                <p>GNSS modules for specific applications with </p>
                <p>quick and seamless development tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product



   