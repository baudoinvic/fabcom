import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';


const EducationalKit = () => {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-32">
        <h1 className="text-left text-4xl font-bold mt-8 mb-4">
          EducationalKit
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row mx-4 md:mx-10 lg:mx-20 xl:mx-32 shadow-md">
        <div className="w-full lg:w-1/2 lg:mr-5">
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

        <div className="w-full lg:w-1/2 lg:ml-5">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2PY0JwslnenVCA4Nt2tfg9/7b491666f2344fc9a2b338bde4f15576/Calendly_BestAcctManagementSoftware_BlogHeader_1920x1080.png?q=85&fm=webp"
            alt="Educational kit"
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

export default EducationalKit