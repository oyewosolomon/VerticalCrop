import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, ChevronLeft } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Restaurant Owner",
      company: "Fresh Bites Café",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      quote: "VerticalCrop Systems has transformed our farm-to-table concept. We now source fresh, local produce year-round, and our customers can taste the difference.",
      rating: 5,
      metrics: {
        savings: "30%",
        freshness: "24hr",
        satisfaction: "99%"
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Director of Operations",
      company: "GreenGrocers Co-op",
      image: "https://randomuser.me/api/portraits/men/96.jpg",
      quote: "The consistency and quality of produce from VerticalCrop's systems have exceeded our expectations. Their technology has helped us reduce waste and improve our supply chain reliability.",
      rating: 5,
      metrics: {
        waste: "-60%",
        reliability: "99.9%",
        growth: "+45%"
      }
    },
    {
      id: 3,
      name: "Dr. Emma Thompson",
      role: "Sustainability Officer",
      company: "Urban Food Initiative",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
      quote: "Working with VerticalCrop Systems has enabled us to bring fresh, nutritious produce to urban food deserts. Their technology is truly making a difference in community health.",
      rating: 5,
      metrics: {
        impact: "10k+",
        access: "+200%",
        health: "+75%"
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our vertical farming solutions are making a difference
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                            <p className="text-gray-600">{testimonial.role}</p>
                            <p className="text-green-600 font-medium">{testimonial.company}</p>
                          </div>
                        </div>
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 text-lg italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        {Object.entries(testimonial.metrics).map(([key, value]) => (
                          <div key={key} className="bg-white rounded-xl p-6 shadow-sm">
                            <h4 className="text-gray-600 uppercase text-sm mb-2">{key}</h4>
                            <p className="text-3xl font-bold text-green-600">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === index 
                    ? 'bg-green-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Testimonials;