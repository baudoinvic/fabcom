import React from 'react'

const About = () => {
  return (
    <div
      class="flex flex-col md:flex-row "
      style={{ marginRight: "3rem", marginLeft: "3rem", marginTop: "7rem" }}
    >
      <div class=" w-full md:w-1/2 p-8 ">
        <h1 class="text-blue-500 text-3xl font-bold mb-4">About us</h1>
        <p class="mb-4">
          We are the expert on hardware and embedded system things. We help a
          lot of people all over the world to gain more experience with us. We
          also work on several projects based on the Internet of Things. We are
          here to help you. We create diverse, complex web and mobile solutions
          for any business need. With us, you get quality software and perfect
          service every time. So don't hesitate to join us if you are interested
          in what we are doing. Let's keep in touch. We shall always be there
          for you.
        </p>
        <p class="mb-4">
          Quantum computers have the potential to make public-key cryptographic
          algorithms vulnerable to attacks. Post-quantum cryptography is
          designed to thwart the quantum computing threat. ST is deeply involved
          in the standardization process and the development of post-quantum
          algorithms to ensure a seamless transition to the post-quantum era and
          protect our digital future.
        </p>
        <p class="mb-4">
          Power transistors are a key component of every power system, which is
          why we are continuously innovating to deliver the next level of
          efficiency and reliability. We use traditional silicon, wide bandgap
          materials, and advances in packaging technology to help our customers
          achieve the results they need.
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Know more
        </button>
      </div>
      <div class="w-full  md:w-1/2">
        <img
          src="https://hardwareforsoftware.com/img/services/Electronics.webp"
          alt="Building"
          class="mt-14 h-auto"
        ></img>
      </div>
    </div>
  );
}

export default About