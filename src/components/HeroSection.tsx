
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Offset for fixed header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });

      toast({
        title: `Scrolling to ${sectionId} section`,
        description: "Please wait while we take you there.",
      });
    } else {
      toast({
        title: "Section not found",
        description: `The ${sectionId} section could not be found on this page.`,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#1a3c4d] to-[#2b5d73] text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-32 lg:pt-24 lg:pb-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Switch to solar in <span className="text-[#4bafdb]">Odisha</span>, at Zero Investment!
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            ₹1,38,000 government subsidy covers your down payment, and monthly solar savings cover your EMIs.
            Reduce your electricity bills by up to 90% and help build a greener Odisha.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#4bafdb] hover:bg-[#4bafdb]/90 text-white font-bold px-8 py-6 text-lg transition-all active:scale-95 cursor-pointer"
            >
              Book a Free Consultation
            </Button>
            <Button 
              onClick={() => scrollToSection('calculator')}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-6 text-lg transition-all active:scale-95 cursor-pointer"
            >
              Calculate Savings
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => scrollToSection('about')}
          className="rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-transform hover:translate-y-1 active:translate-y-2 cursor-pointer"
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Decorative SVG */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <svg 
          className="absolute right-0 h-full w-1/2 text-[#1a3c4d] opacity-20" 
          viewBox="0 0 500 500" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M300,500C246,399,292,250,198,200C104,150,150,50,200,0C250,-50,400,0,450,100C500,200,400,300,400,400C400,500,354,601,300,500Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;




// import React from "react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const handleBookConsultation = () => {
//     // Navigate to consultation booking page
//     navigate("/book-consultation");
//     toast({
//       title: "Consultation Request Initiated",
//       description: "Fill out the form to complete your booking.",
//     });
//   };

//   const handleCalculateSavings = () => {
//     // Navigate to savings calculator page
//     navigate("/savings-calculator");
//     toast({
//       title: "Savings Calculator",
//       description: "Calculate your potential solar savings.",
//     });
//   };

//   return (
//     <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
//       <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             Power Your Home With Clean Solar Energy in Odisha
//           </h1>
//           <p className="text-xl md:text-2xl mb-8">
//             Start saving up to 90% on your electricity bills today with high-quality solar panel installations tailored for Odisha's climate.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button 
//               size="lg" 
//               className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
//               onClick={handleBookConsultation}
//             >
//               Book Free Consultation
//             </Button>
//             <Button 
//               size="lg" 
//               variant="outline" 
//               className="bg-transparent border-white hover:bg-white hover:text-green-800"
//               onClick={handleCalculateSavings}
//             >
//               Calculate Your Savings
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 right-0 w-1/3 h-full bg-opacity-20 bg-cover bg-right hidden lg:block" 
//            style={{ backgroundImage: "url('/solar-panel-hero.jpg')" }}></div>
//     </div>
//   );
// };

// export default HeroSection;
