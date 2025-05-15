import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 px-4 md:px-24 pt-12 pb-4">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* الشعار والنص */}
        <div className="flex-1">
          <h2 className="text-white font-bold text-xl mb-2">Launchify</h2>
          <p className="max-w-md text-sm leading-relaxed text-gray-400">
            Launchify is an Ecommerce platform that helps you find the best
            products and services. From electronics to fashion – all at great
            prices. Join us and enjoy the future of shopping.
          </p>
        </div>

        {/* روابط الأقسام */}
        <div className="flex flex-1 justify-between flex-wrap gap-6">
          <div>
            <h4 className="font-semibold text-white text-lg mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-lg mb-3">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/events"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/forum"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Forum
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-lg mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/help-center"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6 text-xl text-gray-400">
        <a
          href="https://facebook.com"
          className="hover:text-cyan-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          className="hover:text-cyan-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          className="hover:text-cyan-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 Launchify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
