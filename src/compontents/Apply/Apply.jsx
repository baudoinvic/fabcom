import React, { useState } from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Apply = () => {

  // const [formData, setFormData] = useState({
  //   Firstname:'',
  //   Lastname:'',
  //   email:'',
  //   phoneNumber:'',
  //   file: null,
  //   yearsOfExperience: 0,
  //   description: '',
  // });

      const [formData, setFormData] = useState({
        Firstname: "",
        Lastname: "",
        email: "",
        phoneNumber: "",
        file: "",
        yearsOfExperience: "",
        description: ""
      });


       const handleChange = (e) => {
         const fieldName = e.target.name;

         if (fieldName === "file") {
           const selectedFile = e.target.files[0];

           setFormData({
             ...formData,
             [fieldName]: selectedFile,
           });
         } else {
           setFormData({
             ...formData,
             [fieldName]: e.target.value,
           });
         }
       };




     const handleSubmit = async (e) => {
       e.preventDefault();

       try{
         let token = localStorage.getItem("Token");
         console.log("Request Data", formData);


         const response = await axios({
            url: "https://fabtechhub.onrender.com/FabtechHub/application/newApplication",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
       
            data: JSON.stringify(formData)
         });

         console.log("Response Data:", response.data);
         toast.success("your application was submitted successfully")
       } catch (error){
          console.error("Error:", error.response ? error.response.data : error);
         toast.error("Failed to apply. Please try again later.");
       }
     };
 





  return (
    <div className="job-applications">
      <Navbar />
      <div className="">
        <div class="bg-white container  mx-auto p-8 max-w-md shadow-lg">
          <h2 class="text-2xl font-semibold mb-6">Job Application Form</h2>

          <form onClick={handleSubmit} action="/submit_application" method="post" class="space-y-4">
            <div class="flex flex-col">
              <label for="name" class="mb-1">
                Firstname
              </label>
              <input
                type="text"
                id="Firstname"
                name="Firstname"
                required
                class="border p-2 rounded"
              
                onChange={handleChange}
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="name" class="mb-1">
                LastName
              </label>
              <input
                type="text"
                id="Lastname"
                name="Lastname"
                required
                class="border p-2 rounded"
             
                onChange={handleChange}
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="email" class="mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="border p-2 rounded"
             
                onChange={handleChange}
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="phone" class="mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                class="border p-2 rounded"
              
                onChange={handleChange}
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="resume" class="mb-1">
                Resume (PDF or Word document)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".pdf, .doc, .docx"
                required
                class="border p-2"
             
                 onChange={handleChange}
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="experience" class="mb-1">
                Years of Experience
              </label>
              <input
                type="number"
                id="yearsOfExperience"
                name="yearsOfExperience"
                min="0"
                required
                class="border p-2 rounded"
             
                onChange={handleChange}
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="additionalInfo" class="mb-1">
                description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
                class="border p-2 rounded"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Apply Now
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apply