import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <div>
      <div className="relative">
        <video
          style={{ height: "580px" }}
          className="w-full  object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/techVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <span className="text-white font-bold text-center mb-4 max-w-3/4 animate-slideIn text-3xl">
            Welcome to FabTech Hub, where innovation meets excellence
            <br /> As a dynamic and forward-thinking technology company.
          </span>
          <Link to="/about">
            <button
              class="px-4 py-4 bg-[#02010130] text-white font-bold rounded hover:bg-black-100"
              style={{
                borderRadius: "30px",
                border: "solid 4px white",
                marginRight: "5rem",
              }}
            >
             Discover More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header