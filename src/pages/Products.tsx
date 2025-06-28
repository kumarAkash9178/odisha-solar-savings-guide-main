import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Features from '../components/FeaturesProducts';
import CTA from '../components/CTA';
// import ContactSection from '../components/ContactSection'; // ✅ Optional

const Products = () => {
  return (
    <div className="min-h-screen px-4 py-4">
      {/* ✅ Back to Home Button */}
      <div className="mb-4">
        <Link to="/">
          <Button variant="ghost" size="sm" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* <Hero /> */}
      <ProductGrid />
      <Features />
      <CTA />
      {/* <ContactSection />  */}
    </div>
  );
};

export default Products;
