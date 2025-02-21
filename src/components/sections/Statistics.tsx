import React, { useState, useEffect } from 'react';
import { ArrowDown, Leaf, Droplet, Factory, ChevronRight, Menu, X } from 'lucide-react';

// Stats Section Component
const Stats = () => {
  const stats = [
    { icon: <Factory size={32} />, value: "100+", label: "Vertical Farms" },
    { icon: <Leaf size={32} />, value: "500,000+", label: "Pounds of Produce" },
    { icon: <Droplet size={32} />, value: "95%", label: "Less Water Usage" }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition">
              <div className="flex justify-center text-green-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component


export default Stats;