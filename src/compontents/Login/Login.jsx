import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="border shadow-md  pb-10 m-12 overflow-hidden md:w-1/3 w-full">
          <h1 className=" font-extrabold uppercase text-2xl w-full bg-blue-500 px-4 py-8 text-left text-white">
            Login
          </h1>
          <div className="mt-4 mb-2  font-semibold md:ml-8 ml-4">
            <label>Username</label>
          </div>
          <div className="w-full md:ml-8 ml-4">
            <input
              type="text"
              className="rounded-lg shadow-md p-2 mb-2 md:w-4/6 w-5/6"
            />
          </div>
          <div className="mt-4 mb-2  font-semibold md:ml-8 ml-4">
            <label>Password</label>
          </div>
          <div className="w-full md:ml-8 ml-4">
            <input
              type="password"
              className="rounded-lg shadow-md p-2 mb-2 md:w-4/6 w-5/6"
            />
            <p className=" text-sm m-2 w-4/6 text-left">
              don't you have an account?{" "}
              <Link to="/signup">
                <span className="text-blue-600 cursor-pointer">
                  Signup here
                </span>
                
              </Link>
            </p>
          </div>

          <button className="bg-blue-500 rounded-lg w-2/6 px-5 text-xl font-bold text-white text-center pb-2 mt-3 ml-8 py-1 ">
            login
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login