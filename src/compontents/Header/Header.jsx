import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <div
      class="flex items-center justify-center ml-10  "
      style={{ marginTop: "7rem" }}
    >
      <div class="w-1/2 ml-10">
        <h1 class="text-6xl font-bold mb-8 text-purple-800">FabtechHub</h1>
        <span class="text-lg block leading-relaxed mb-12">
          Innovation Meets Excellence
          <br />
          <br />
          FabTech Hub is a dynamic and forward-thinking technology
          <br /> company where innovation meets excellence
        </span>
      </div>
      <div class="w-1/2">
        <img
          src="https://media.istockphoto.com/id/1157610669/vector/financial-audit-budget-graph-tax-expert-and-business-finance-balance-valuation-isometric-3d.jpg?s=612x612&w=0&k=20&c=EhrSx9BlGTxEnnNir0xsuqor9RJ1Ql91eT82v2buSlc="
          alt="Image"
          class="rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}

export default Header