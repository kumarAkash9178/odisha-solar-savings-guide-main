
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "25+ Year Warranty",
      description: "All our solar panels come with industry-leading warranties for your peace of mind.",
      icon: "🛡️"
    },
    {
      title: "Professional Installation",
      description: "Our certified technicians ensure proper installation and optimal performance.",
      icon: "🔧"
    },
    {
      title: "Smart Monitoring",
      description: "Track your energy production and consumption with our advanced monitoring systems.",
      icon: "📊"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to address any questions or concerns.",
      icon: "🎧"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Solar Solutions?</h2>
          <p className="text-lg text-gray-600">We're committed to providing the best solar experience from consultation to installation and beyond.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
