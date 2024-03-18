import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    // <div
    //   class="flex items-center justify-center ml-10  "
    //   style={{ marginTop: "7rem" }}
    // >
    //   <div class="w-1/2 ml-10">
    //     <h1 class="text-6xl font-bold mb-8 text-purple-800">
    //       FabtechHub<h1 className="text-black"> Innovation</h1>
    //     </h1>
    //     <h4 class="text-2xl font-bold  text-purple-800">Meets Excellence</h4>
    //     <span class="text-lg block leading-relaxed ">
    //       <br />
    //       <br />
    //       FabTech Hub is a dynamic and forward-thinking technology
    //       <br /> company where innovation meets excellence
    //     </span>
    //     <button class="mt-10 px-6 py-3 bg-purple-800 text-white font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out">
    //       Let's get started
    //     </button>
    //   </div>
    //   <div class="w-1/2">
    //     <img
    //       src="https://media.istockphoto.com/id/1157610669/vector/financial-audit-budget-graph-tax-expert-and-business-finance-balance-valuation-isometric-3d.jpg?s=612x612&w=0&k=20&c=EhrSx9BlGTxEnnNir0xsuqor9RJ1Ql91eT82v2buSlc="
    //       alt="Image"
    //       class="rounded-lg shadow-xl"
    //     />
    //   </div>
    // </div>

    <div className="flex flex-col md:flex-row items-center justify-center ml-10 mt-7">
      <div className="w-full md:w-1/2 max-w-screen-xl md:ml-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-purple-800">
          FabtechHub<span className="text-black"> Innovation</span>
        </h1>
        <h4 className="text-xl md:text-2xl font-bold text-purple-800">
          Meets Excellence
        </h4>
        <p className="text-lg md:text-base leading-relaxed mt-4">
          FabTech Hub is a dynamic and forward-thinking technology company<br /> where
          innovation meets excellence.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-800 text-white font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out">
          Let's get started
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img
          src="https://media.istockphoto.com/id/1157610669/vector/financial-audit-budget-graph-tax-expert-and-business-finance-balance-valuation-isometric-3d.jpg?s=612x612&w=0&k=20&c=EhrSx9BlGTxEnnNir0xsuqor9RJ1Ql91eT82v2buSlc="
          alt="Image"
          className="rounded-lg shadow-xl w-full"
        />
      </div>
    </div>
  );
}

export default Header