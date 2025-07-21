import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React from "react";

const Contact = () => {
  return (
<div>
   <Header/>
       <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt text-blue-600 text-xl mt-1"></i>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>123 Street, Gandy Street, Syracuse NY 13221</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="fas fa-phone-alt text-blue-600 text-xl mt-1"></i>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+1 315-234-3812</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="fas fa-envelope text-blue-600 text-xl mt-1"></i>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>info@goru.com</p>
              </div>
            </div>

            <div className="flex gap-4 text-lg mt-4 text-gray-600">
              <a href="#"><i className="fab fa-facebook-f hover:text-blue-600"></i></a>
              <a href="#"><i className="fab fa-twitter hover:text-blue-500"></i></a>
              <a href="#"><i className="fab fa-instagram hover:text-pink-500"></i></a>
              <a href="#"><i className="fab fa-linkedin-in hover:text-blue-800"></i></a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
</div>
  );
};

export default Contact;
