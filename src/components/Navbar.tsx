
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/dc677fc6-7cfc-40ee-a0f8-f37ef7edccdf.png" 
            alt="Clans Logo" 
            className="h-10" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-gray-700 hover:text-solar-blue transition-colors">
            Benefits
          </a>
          <a href="#calculator" className="text-gray-700 hover:text-solar-blue transition-colors">
            Savings Calculator
          </a>
          <a href="#contact" className="text-gray-700 hover:text-solar-blue transition-colors">
            Contact
          </a>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-solar-blue hover:bg-solar-blue/90 text-white">
            Get Free Quote
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-white shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#benefits"
              className="text-gray-700 hover:text-solar-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#calculator"
              className="text-gray-700 hover:text-solar-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Savings Calculator
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-solar-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-solar-blue hover:bg-solar-blue/90 text-white w-full">
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
