import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';

const Apply = () => {
  return (
    <div className="job-applications">
      <Navbar />
      <div className="bg-gray-100">
        <div class="bg-white container  mx-auto p-8 max-w-md shadow-lg">
          <h2 class="text-2xl font-semibold mb-6">Job Application Form</h2>

          <form action="/submit_application" method="post" class="space-y-4">
            <div class="flex flex-col">
              <label for="name" class="mb-1">
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="border p-2 rounded"
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
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="phone" class="mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                class="border p-2 rounded"
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="resume" class="mb-1">
                Resume (PDF or Word document)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf, .doc, .docx"
                required
                class="border p-2"
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="experience" class="mb-1">
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                min="0"
                required
                class="border p-2 rounded"
              ></input>
            </div>

            <div class="flex flex-col">
              <label for="additionalInfo" class="mb-1">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows="4"
                class="border p-2 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apply