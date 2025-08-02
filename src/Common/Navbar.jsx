  import React, { useState } from "react";
  import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (


      <header className="w-full left-0 justify-end mb-10">
        {/* ✅ Top Contact Bar */}
     
      <nav className="bg-transparent ">
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
                <Link to={"/about"} className="relative text-gray-700 hover:text-blue-500 pb-[0.5px] hover:border-b">
                  About
                </Link>
                <a href="#" className="relative text-gray-700 hover:text-blue-500 pb-[0.5px] hover:border-b">
                  Products
                </a>
                <a href="#" className="relative text-gray-700 hover:text-blue-500 pb-[0.5px] hover:border-b">
                  Application
                </a>
                <a href="#" className="relative text-gray-700 hover:text-blue-500 pb-[0.5px] hover:border-b">
                  Quality
                </a>
                <a href="#" className="relative text-gray-700 hover:text-blue-500 pb-[0.5px] hover:border-b">
                  Reach
                </a>
                <a href="#" className="relative text-gray-700 hover:text-blue-500 pb-[0.5px] hover:border-b">
                  Quantity
                </a>
              </div>

              
              <div>
                <button className="bg-[#EDA94E] text-white px-4 py-2 rounded-4xl hover:bg-[#EDA94E]-700 transition">
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </header>
    );
  }