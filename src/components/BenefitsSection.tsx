
import { Sun, CloudSun, Zap, Coins, Shield, Leaf } from "lucide-react";

const benefits = [
  {
    icon: <Sun className="h-10 w-10 text-solar-yellow" />,
    title: "Abundant Sunlight",
    description: "Odisha receives 280-300 sunny days per year, making it ideal for solar power generation."
  },
  {
    icon: <CloudSun className="h-10 w-10 text-solar-yellow" />,
    title: "Works in All Weather",
    description: "Modern solar panels can generate electricity even on cloudy days, perfect for Odisha's climate."
  },
  {
    icon: <Zap className="h-10 w-10 text-solar-yellow" />,
    title: "Reduce Power Cuts",
    description: "Generate your own electricity and stay powered during frequent Odisha power outages."
  },
  {
    icon: <Coins className="h-10 w-10 text-solar-yellow" />,
    title: "Huge Savings",
    description: "Save up to 90% on your electricity bills with properly sized solar systems."
  },
  {
    icon: <Shield className="h-10 w-10 text-solar-yellow" />,
    title: "Government Subsidies",
    description: "Take advantage of Odisha state subsidies and central government incentives for solar adoption."
  },
  {
    icon: <Leaf className="h-10 w-10 text-solar-yellow" />,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint and contribute to a cleaner, greener Odisha."
  }
];

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Solar Energy in Odisha?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Odisha's climate and government initiatives make it perfect for solar power adoption.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
