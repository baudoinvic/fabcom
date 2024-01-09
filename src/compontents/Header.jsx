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

          

          <div class="absolute inset-0 flex flex-col items-center justify-center ">
            <span
              class="text-white text-center mb-4 max-w-3/4 animate-moveText"
              style={{ fontSize: "30px" }}
            >
              Our technology starts with you.<br></br> Let's build a
              computerized world together.
            </span>
            <Link to="/about">
              <button class="px-4 py-4 bg-white text-blue-500 font-semibold rounded hover:bg-blue-100">
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