import React, { useState, useEffect } from 'react';
import { ArrowDown, Leaf, Droplet, Factory, ChevronRight, Menu, X } from 'lucide-react';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ?'text-green-600':'text-white'} `}>VerticalCrop</span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8`}>
            <a href="#home" className={`text-gray-700 ${ isScrolled?'':'text-white'} hover:text-green-600 transition`}>Home</a>
            <a href="#technology" className={`text-gray-700 ${ isScrolled?'':'text-white'} hover:text-green-600 transition`}>Technology</a>
            <a href="#impact" className={`text-gray-700 ${ isScrolled?'':'text-white'} hover:text-green-600 transition`}>Impact</a>
            <a href="#contact" className={`bg-green-600 ${ isScrolled?'':'text-white'} text-white px-4 py-2 rounded-lg hover:bg-green-700 transition`}>
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition">Home</a>
              <a href="#technology" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition">Technology</a>
              <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition">Impact</a>
              <a href="#contact" className="block px-3 py-2 text-green-600 font-medium">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};



export default Navbar;