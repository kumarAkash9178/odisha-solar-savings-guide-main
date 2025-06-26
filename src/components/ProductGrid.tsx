
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      title: "Grid Connected Solar System",
      description: "Perfect for residential and commercial properties, this system connects directly to the electrical grid, allowing you to sell excess energy back to your utility company.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      features: [
        "Grid-tie inverter included",
        "Net metering compatible", 
        "Scalable design",
        "Professional installation"
      ],
      isPopular: true
    },
    {
      title: "Battery Based Solar System",
      description: "Complete energy independence with battery storage. Store excess solar energy during the day and use it when the sun isn't shining or during power outages.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=300&fit=crop",
      features: [
        "Lithium battery storage",
        "Backup power capability",
        "Smart energy management",
        "Weather resistant design"
      ]
    },
    {
      title: "Micro Inverter Based Grid Connected System",
      description: "Advanced micro-inverter technology maximizes energy harvest from each panel individually, ensuring optimal performance even in partial shading conditions.",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=300&fit=crop",
      features: [
        "Individual panel optimization",
        "Enhanced monitoring",
        "Improved safety",
        "Better performance in shade"
      ]
    },
    {
      title: "Solar Tree",
      description: "Innovative solar tree design that combines aesthetics with functionality. Perfect for parks, campuses, and urban spaces where traditional panels aren't suitable.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
      features: [
        "Artistic design",
        "Space efficient",
        "LED lighting integration",
        "Educational display options"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-[#2a5060]">Our Product</span> Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive selection of solar solutions, each designed to meet specific energy needs and installation requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
