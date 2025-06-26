import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Features from '../components/FeaturesProducts';
import CTA from '../components/CTA';
// import ContactSection from '../components/ContactSection'; // ✅ Import

const Products = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGrid />
      <Features />
      <CTA />
      {/* <ContactSection />  */}
      {/* ✅ Add this to allow scroll target */}
    </div>
  );
};

export default Products;
