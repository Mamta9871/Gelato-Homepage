import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pb-6 bg-gray-200 lg:pb-0">
      <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-0">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Menu Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-1 flex justify-items-start">
            <a href="#" title="" className="flex w-full h-auto">
              <img className="object-contain h-auto w-2/3 flex" src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg" alt="Gelato Logo" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:ml-auto lg:space-x-28`}>
            <a href="#" className="text-2xl font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Contact us</a>
            <a href="#" className="text-2xl font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">IN/INR</a>
            <a href="#" className="text-2xl font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Cart</a>
            <a href="#" className="text-2xl font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Sign in</a>
          </div>

          {/* Sign Up Button (Visible in Mobile and Desktop) */}
          <div className="lg:hidden flex items-center ml-auto">
            <a href="#" className="px-4 py-3 text-lg font-semibold text-white transition-all duration-200 bg-black rounded-3xl hover:text-gray-400">Sign up for free</a>
          </div>

          {/* Sign Up Button (Visible only in Desktop) */}
          <div className="hidden lg:inline-flex items-center ml-10">
            <a href="#" className="px-6 py-3 text-xl font-semibold text-white transition-all duration-200 bg-black rounded-3xl hover:text-gray-400">Sign up for free</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
