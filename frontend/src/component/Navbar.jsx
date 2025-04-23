// Navbar.jsx

import React from 'react';
import Logo from '../assets/Daco_240.png';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#272221] text-white px-10 py-4 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-16 h-12" />
        <span className="text-6xl font-bold tracking-wide">STREAM</span>
      </div>

      {/* Right-side nav items */}
      <div className="flex items-center gap-8 bg-[#2A2A2A] px-4 py-6 rounded-md text-4xl font-medium">
  <div className="flex items-center gap-2 cursor-pointer hover:bg-[#3A3A3A] p-2 rounded-md transition duration-300">
    <Search size={40} />
    <span>SEARCH</span>
  </div>
  <a href='/signin'>
  <span className="cursor-pointer hover:text-[#f05922]">SIGN IN </span>
  </a>
  
  <span className="cursor-pointer hover:text-[#f05922]">ABOUT</span>
  <span className="cursor-pointer hover:text-[#f05922]">CONTACT</span>
  </div>
    </nav>
  );
};

export default Navbar;
