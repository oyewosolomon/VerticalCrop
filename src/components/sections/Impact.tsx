import React, { useState } from 'react';
import { Globe, Trees, Sprout } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';

// Define types for our data and props
interface ChartDataPoint {
  month: string;
  water: number;
  carbon: number;
  traditional: number;
}

interface ImpactMetric {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    color?: string;
    name?: string;
    value?: number | string;
  }>;
  label?: string;
}

// Custom Tooltip Component with TypeScript
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold text-gray-900">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Impact Section Component
const ImpactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'environmental' | 'carbon'>('environmental');

  // Sample data for the impact chart with explicit typing
  const chartData: ChartDataPoint[] = [
    { month: 'Jan', water: 2000, carbon: 150, traditional: 4000 },
    { month: 'Feb', water: 1800, carbon: 140, traditional: 4100 },
    { month: 'Mar', water: 1900, carbon: 145, traditional: 4050 },
    { month: 'Apr', water: 1700, carbon: 135, traditional: 4200 },
    { month: 'May', water: 1600, carbon: 130, traditional: 4150 },
    { month: 'Jun', water: 1500, carbon: 125, traditional: 4300 },
  ];

  const impactMetrics: ImpactMetric[] = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Carbon Footprint",
      value: "75%",
      description: "Reduction in carbon emissions compared to traditional farming"
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Land Usage",
      value: "90%",
      description: "Less land required than conventional agriculture"
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: "Local Impact",
      value: "100+",
      description: "Local communities supported with fresh produce"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sustainable Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our vertical farming technology is revolutionizing agriculture while protecting our planet
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 transform transition-all duration-300 hover:scale-105"
            >
              <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-green-200 rounded-full opacity-20" />
              <div className="relative z-10">
                <div className="text-green-600 mb-4">{metric.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{metric.title}</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">{metric.value}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Chart Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveTab('environmental')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'environmental' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Water Usage
            </button>
            <button
              onClick={() => setActiveTab('carbon')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'carbon' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Carbon Emissions
            </button>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280">
                  <Label value="Month" offset={-5} position="insideBottom" />
                </XAxis>
                <YAxis stroke="#6b7280">
                  <Label 
                    value={activeTab === 'environmental' ? 'Liters (Water)' : 'Tons (Carbon)'} 
                    angle={-90} 
                    position="insideLeft" 
                    style={{ textAnchor: 'middle' }} 
                  />
                </YAxis>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="top" 
                  height={36}
                  formatter={(value) => (
                    <span className="text-gray-600">{value}</span>
                  )}
                />
                <Bar 
                  dataKey={activeTab === 'environmental' ? 'water' : 'carbon'} 
                  fill="#16a34a" 
                  name={activeTab === 'environmental' ? 'Vertical Farming Water Usage' : 'Vertical Farming Carbon Emissions'}
                />
                <Bar 
                  dataKey="traditional" 
                  fill="#94a3b8" 
                  name="Traditional Farming"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center text-gray-600">
            Comparison between VerticalCrop Systems and traditional farming methods
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;