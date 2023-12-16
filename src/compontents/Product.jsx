import React from 'react'

const Product = () => {
  return (
    <div class="relative text-center  object-cover ">
      <img
        src="https://www.st.com/content/dam/crew/drone-takeoff-building.jpg"
        style={{ width: "104rem", height: "890px" }}
        alt="Robot Factory Image"
      ></img>

      <div className="justify-center">
        <div
          className="absolute top-1/2  transform  -translate-y-1/2 text-white ml-10 "
          style={{ marginTop: "-7rem" }}
        >
          <p className="text-lg lg:text-xl xl:text-2xl font-bold ">
            Products & innovations for you
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl mt-5 ">Smart Mobility</p>
          <p className="text-lg lg:text-xl xl:text-2xl mt-5 ">Power & Energy</p>
          <p className="text-lg lg:text-xl xl:text-2xl mt-5">
            Cloud-connected Autonomous Things
          </p>
        </div>

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white "
          style={{ marginTop: "-6rem", marginLeft: "20rem" }}
        >
          <p class="text-4xl font-bold ">Cloud-connected Autonomous Things</p>
          <p class="text-2xl  mb-4 mt-5">
            We are supporting the proliferation of secure, connected, autonomous
            devices enabled by edge AI.
          </p>

          <div class="flex space-x-9">
            <div class="flex-none">
              <div class="relative">
                <img
                  src="https://www.st.com/content/dam/0hp/2023-11/products-and-innovation/lora-device-provisioning-with-nfc.jpg"
                  alt="Image 1"
                  class="w-full max-w-xs"
                ></img>
                <div class="text-black bottom-0 left-0 w-full bg-white p-2">
                  <p class="font-bold text-blue-500">Tiny dual-band GNSS ICs</p>
                  <p>Explore the new features of our Teseo</p>
                  <p>GNSS modules for specific applications with </p>
                  <p>qucik and seamless development tools</p>
                </div>
              </div>
            </div>
            <div class="flex-none">
              <div class="relative">
                <img
                  src="https://www.st.com/content/dam/0hp/2023-11/products-and-innovation/webinar-ame-easily-implement-gnss.jpg"
                  alt="Image 2"
                  class="w-full max-w-xs"
                ></img>
                <div class="text-black bottom-0 left-0 w-full bg-white p-2">
                  <p class="font-bold text-blue-500">Tiny dual-band GNSS ICs</p>
                  <p>Explore the new features of our Teseo</p>
                  <p>GNSS modules for specific applications with </p>
                  <p>qucik and seamless development tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product