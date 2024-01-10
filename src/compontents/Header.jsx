import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="fab-com-image-desc">
        <div className="relative">
          <img
            class="w-full object-cover shadow-md "
            style={{ height: "560px" }}
            src="https://assets.st.com/is/image/stelectronics/st-edge-artificial-intelligence-products-technology-1920-860-ENG-0x540-2000k"
            alt="Description"
          />

          {/* <div className="video">
            <video controls width="full" height="560">
              <source
                src="https://html.geekcodelab.com/holiday-planners/assets/images/highlight-video.mp4"
                type="video/mp4"
              />
            </video>
          </div> */}

        

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-white font-bold text-center mb-4 max-w-3/4 animate-slideIn"
              style={{ fontSize: "30px" }}
            >
              Welcome to FabTech Hub, where innovation meets excellence<br></br> As a
              dynamic and forward-thinking technology company.
            </span>
            <Link to="/about">
              <button className="px-4 py-4 bg-white text-blue-500 font-semibold rounded hover:bg-blue-100">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header