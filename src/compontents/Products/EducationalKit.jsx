import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';


const EducationalKit = () => {
  return (
    <div>
      <Navbar />

      <div className="ml-10 mr-5">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          EducationalKit
        </h1>
      </div>

      <div className=" flex ml-10 mr-10 shadow-md">
        <div className="w-1/2">
          <span className="mr-4 mt-4">
            The kit is designed to be used by 50 children (aged 0 to 6) at one
            time and is suitable for indoor and outdoor use. The kit aims to
            provide a range of activities to encourage the development and
            social interaction of children (playing, story-telling, numeracy,
            etc.) with materials also provided for caregivers. In addition, the
            kit provides water and sanitation items for the improved health and
            awareness of children.
          </span>
        </div>
        <div className="w-1/2 ml-10">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2PY0JwslnenVCA4Nt2tfg9/7b491666f2344fc9a2b338bde4f15576/Calendly_BestAcctManagementSoftware_BlogHeader_1920x1080.png?q=85&fm=webp"
            alt="Educational kit"
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

export default EducationalKit