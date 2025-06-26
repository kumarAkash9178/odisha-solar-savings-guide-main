import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    navigate("/#contact");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#2a5060] to-[#35484a] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
        <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
          Take the first step towards energy independence. Get a free
          consultation and custom quote for your property.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleScrollToContact}
            className="border-2 border-white hover:bg-white hover:text-[#2a5060] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
