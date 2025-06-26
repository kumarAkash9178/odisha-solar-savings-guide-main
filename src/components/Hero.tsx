
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#4997ad] via-[#2a5060] to-[#35484a] text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white/90 mb-2">
              CLANS MACHINA
            </h1>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-8"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Power Your Future with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
              Solar Energy
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/80 animate-fade-in">
            Discover our comprehensive range of solar solutions designed to meet every energy need
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#4997ad]/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
