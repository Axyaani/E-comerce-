import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-sm text-gray-600 border-t relative">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Description + Social */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-3">
            <span className="bg-black text-white px-1">G</span>oru
            <span className="text-blue-600">.</span>
          </h2>
          <p className="mb-4">
            Sed ut perspiciatis unde omnis iste natus er sit voluptatem
            accusantium dolore.ea commo do consequat. Duis aute irure dolor in
            reprehenderit in.
          </p>
          <div className="flex gap-4 text-gray-500 text-lg">
            <i className="fab fa-facebook-f hover:text-blue-600"></i>
            <i className="fab fa-twitter hover:text-blue-600"></i>
            <i className="fab fa-instagram hover:text-pink-500"></i>
            <i className="fab fa-linkedin-in hover:text-blue-800"></i>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-black mb-3">Useful Links</h3>
         <span className="mb-1 font-semibold opacity-90">Navigate</span>
        <div >
          <Link to="/">HOME</Link> <br />
           <Link to="/About">ABOUT</Link><br />
        <Link to="/shop">SHOP</Link> <br />
           <Link to="/contact">CONTACT</Link>
           
        </div>
    
        </div>

        {/* Account */}
        <div>
          <h3 className="font-bold text-black mb-3">Account</h3>
          <ul className="space-y-2">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Log in</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Purchases</a></li>
            <li><a href="#">Shipping Address</a></li>
          </ul>
        </div>

        {/* Contact & Address */}
        <div>
          <h3 className="font-bold text-black mb-3">Contact & Address</h3>
          <p>123 Street, Gandy Street, Syracuse New York - 13221.</p>
          <p className="mt-2">Phone: +1 315-234-3812</p>
          <p>Email: info@goru.com</p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-bold text-black mb-3">Subscribe</h3>
          <input
            type="email"
            placeholder="admin@mail.com"
            className="w-full px-3 py-2 bg-blue-50 border rounded mb-2"
          />
          <a href="#" className="text-blue-600 underline text-sm">
            Subscribe →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div>
          <span className="mr-3">Privacy Policy</span> |{" "}
          <span className="ml-3">Terms of Service</span>
        </div>
        <div className="mt-2 md:mt-0">
          <i className="far fa-copyright mr-1"></i>
          Copyright WpSmasher 2020 | All Rights Reserved
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded shadow"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
