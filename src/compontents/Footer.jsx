import React from 'react'
import { Link } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState} from 'react';
import "@fortawesome/fontawesome-free/css/all.css";

import "./Footer.css";

const Footer = () => {


  return (
    <div className="">
      <footer>
        <div className="container padding ml-6 ">
          <div className="box logo">
            <h1>FabTechHub</h1>
            <span>We are here</span>
            <p>
              To help you solve the problems in your company and elevate it to a
              very high level.
            </p>
          </div>
          <div className="">
            <div className="">
              <h3>Explore</h3>
              <ul>
                <Link to="/homepage">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About Us</li>
                </Link>

                <Link to="/products">
                  <li>Our products</li>
                </Link>
                <Link to="/career">
                  <li>Careers</li>
                </Link>
              </ul>
            </div>

            <div className="">
              <h3>Import Links</h3>
              <ul>
                <Link to="">
                  <li>Educational Kit</li>
                </Link>
                <Link to="Smart Integration">
                  <li>NetWork Deployment</li>
                </Link>

                <Link to="">
                  <li>Internet of Things</li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3>Our Address</h3>
              <ul>
                <li>
                  <i className="fa fa-map"></i>
                  Rwanda Kigali 640 Street
                </li>
                <li>
                  <i className="fa fa-phone-alt"></i>
                  +250782012140
                </li>
                <li>
                  <i className="fa fa-paper-plane"></i>
                  info@fabtechhubgmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer