import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <div data-aos="zoom-in" className="flex flex-col md:flex-row items-center justify-center ml-10 pt-32 ">
      <div className="w-full md:w-1/2 max-w-screen-xl md:ml-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 text-purple-800">
          FabtechHub<span className="text-black"> Innovation</span>
        </h1>
        <h4 className="text-xl md:text-2xl font-bold text-purple-800">
          Meets Excellence
        </h4>
        <p className="text-lg md:text-base leading-relaxed mt-4">
          FabTech Hub is a dynamic and forward-thinking technology company
          <br /> where innovation meets excellence.
        </p>
        <Link to="/products">
          <button className="mt-6 px-6 py-3 bg-purple-800 text-white font-bold rounded-lg shadow-md hover:bg-purple-900 transition-colors duration-300 ease-in-out">
            Discover More
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img
          src="https://media.istockphoto.com/id/1157610669/vector/financial-audit-budget-graph-tax-expert-and-business-finance-balance-valuation-isometric-3d.jpg?s=612x612&w=0&k=20&c=EhrSx9BlGTxEnnNir0xsuqor9RJ1Ql91eT82v2buSlc="
          alt="Image"
          className="rounded-lg shadow-xl w-84"
        />
      </div>
    </div>
  );
}

export default Header