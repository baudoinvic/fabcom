import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';


const EducationalKit = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-16 px-4 md:px-10 mb-32 md:mb-64">
        <span className="text-purple-800 font-bold text-sm md:text-lg">
          EducationalKit
        </span>

        <div className="flex flex-col lg:flex-row mt-8 items-center lg:items-start gap-8">
          {/* Text Section */}
          <div className="lg:w-1/2 text-gray-600 space-y-4">
            <p className="text-sm md:text-base leading-relaxed">
              The kit is designed to be used by 50 children (aged 0 to 6) at one
              time and is suitable for indoor and outdoor use. The kit aims to
              provide a range of activities to encourage the development and
              social interaction of children (playing, story-telling, numeracy,
              etc.) with materials also provided for caregivers. In addition,
              the kit provides water and sanitation items for the improved
              health and awareness of children.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-1/2 flex justify-center items-center">
            <img
              className="w-full md:w-3/4 lg:w-128 h-60 md:h-80 object-cover rounded-lg shadow-lg border border-solid border-gray-500"
              src="https://images.ctfassets.net/k0lk9kiuza3o/2PY0JwslnenVCA4Nt2tfg9/7b491666f2344fc9a2b338bde4f15576/Calendly_BestAcctManagementSoftware_BlogHeader_1920x1080.png?q=85&fm=webp"
              alt="Large Background"
            />
            <img
              className="absolute bottom-[-100px] left-[10px] md:bottom-[-120px] md:left-[30px] w-2/5 md:w-1/3 rounded-lg border border-gray-500 shadow-lg"
              src="https://images.ctfassets.net/k0lk9kiuza3o/2PY0JwslnenVCA4Nt2tfg9/7b491666f2344fc9a2b338bde4f15576/Calendly_BestAcctManagementSoftware_BlogHeader_1920x1080.png?q=85&fm=webp"
              alt="Small Foreground"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EducationalKit