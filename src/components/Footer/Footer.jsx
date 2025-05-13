import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white px-4 md:px-24 pt-12 pb-4">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* الشعار والنص */}
        <div className="flex-1">
          <p className="text-gray-300 max-w-md text-sm">
            Launchify is Ecommerce platform that helps you to find the best
            products and services. We provide a wide range of products from
            electronics to fashion, all at competitive prices. Our mission is to
            make online shopping easy and accessible for everyone. Join us today
          </p>
        </div>

        {/* روابط الأقسام */}
        <div className="flex flex-1 justify-between flex-wrap gap-4">
          <div>
            <h4 className="font-bold text-lg mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-us"
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <NavLink
                  to="/events"
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/forum"
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  Forum
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <NavLink
                  to="/help-center"
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className="hover:text-gray-100 transition-colors duration-300"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* خط فاصل وحقوق النشر */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 Launchify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
