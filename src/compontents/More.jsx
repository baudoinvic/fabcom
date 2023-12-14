import React from 'react'

const More = () => {
  return (
    <div
      className="upcoming p-4 flex shadow-md"
      style={{ marginRight: "3rem", marginLeft: "3rem" }}
    >
      <div className="event-details bg-white rounded-lg shadow-md hover:shadow-lg w-2/3 pr-4">
        <h2 className="text-blue-500 text-xl font-bold mb-4">
          Our Upcoming Event
        </h2>
        <p className="text-gray-800">
          Want to know more about our latest technologies? Come and meet us,
          let's talk about it together. Boost your monitoring solution with the
          Page EEPROM Automotive TSZ18x zero-drift, precision op amps for harsh
          environments and extended mission profiles. We are here to help you
          troubleshoot your PC and upgrade all software requirements.
        </p>
        <p className="text-gray-800 mt-4">
          Want to know more about our latest technologies? Come and meet us,
          let's talk about it together. Boost your monitoring solution with the
          Page EEPROM Automotive TSZ18x zero-drift, precision op amps for harsh
          environments and extended mission profiles. We are here to help you
          troubleshoot your PC and upgrade all software requirements.
        </p>
        <p className="text-gray-800 mt-4">
          Want to know more about our latest technologies? Come and meet us,
          let's talk about it together. Boost your monitoring solution with the
          Page EEPROM Automotive TSZ18x zero-drift, precision op amps for harsh
          environments and extended mission profiles. We are here to help you
          troubleshoot your PC and upgrade all software requirements.
        </p>
        <p className="text-gray-800 mt-4">
          Want to know more about our latest technologies? Come and meet us,
          let's talk about it together. Boost your monitoring solution with the
          Page EEPROM Automotive TSZ18x zero-drift, precision op amps for harsh
          environments and extended mission profiles. We are here to help you
          troubleshoot your PC and upgrade all software requirements.
        </p>
      </div>

      <div className="event-images flex flex-col justify-center items-center">
        <div
          className="mb-4 flex flex-row items-center"
          style={{
            backgroundColor: "#F5F5F5",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            marginRight: "16px",
          }}
        >
          <img
            src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/11/Capgemini_Semiconductors.jpg"
            alt="Event Image 1"
            className="w-64 rounded-lg"
          />
          <div className="ml-10 text-left">
            <p>
              on demand intelligent for <br />
              suitable always aware applications
            </p>
            <button
              className="bg-white px-4 py-2 rounded-md mt-2 shadow-md"
              onClick={() => {}}
            >
              On Demand
            </button>
          </div>
        </div>

        <div
          className="mb-4 flex flex-row items-center"
          style={{
            backgroundColor: "#F5F5F5",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            marginRight: "16px",
          }}
        >
          <img
            src="https://hardwareforsoftware.com/img/services/Electronics.webp"
            alt="Event Image 2"
            className="w-64 rounded-lg"
          />
          <div className="ml-10 text-left">
            <p>
              on demand intelligent for <br />
              suitable always aware applications
            </p>
            <button
              className="bg-white px-4 py-2 rounded-md mt-2"
              onClick={() => {}}
            >
              On Demand
            </button>
          </div>
        </div>

        <div
          className="flex flex-row items-center"
          style={{
            backgroundColor: "#F5F5F5",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="https://etimg.etb2bimg.com/photo/88696752.cms"
            alt="Event Image 3"
            className="w-64 rounded-lg"
          />
          <div className="ml-10 text-left">
            <p>
              on demand intelligent for <br />
              suitable always aware applications
            </p>
            <button
              className="bg-white px-4 py-2 rounded-md mt-2 shadow-md"
              onClick={() => {}}
            >
              On Demand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More