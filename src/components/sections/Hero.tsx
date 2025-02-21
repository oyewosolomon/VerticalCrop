import React, { useState, useEffect } from 'react';
import { ArrowDown, Leaf, Droplet, Factory, ChevronRight, Menu, X } from 'lucide-react';

// Hero Section Component
const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/90 z-10" />
      <img
        src="/api/placeholder/1920/1080"
        alt="Vertical farming facility"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Revolutionizing Agriculture Through Vertical Innovation
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Managing 100+ vertical farms producing over 500,000 pounds of sustainable produce annually
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition flex items-center justify-center">
            Learn More <ChevronRight className="ml-2" size={20} />
          </button>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Get Started
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white" size={32} />
        </div>
      </div>
    </div>
  );
};




export default Hero;