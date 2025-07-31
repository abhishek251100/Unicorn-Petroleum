import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="text-xl font-bold text-blue-600">LOGO</div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Menu */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex md:items-center md:justify-between w-full absolute md:static top-16 left-0 bg-red-600 md:bg-transparent md:flex-row flex-col items-center gap-4 md:gap-8 py-4 md:py-0 px-4 md:px-0`}
          >
            {/* Center Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 flex-1 justify-center">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Application
              </a>
               <a href="#" className="text-gray-700 hover:text-blue-500">
                Quality
              </a>
               <a href="#" className="text-gray-700 hover:text-blue-500">
                Reach
              </a>
               <a href="#" className="text-gray-700 hover:text-blue-500">
                Quantity
              </a>
            </div>

            {/* Right: Contact Button */}
            <div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}