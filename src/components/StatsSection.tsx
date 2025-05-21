
import { Award, Home, Zap, CreditCard } from "lucide-react";

const stats = [
  {
    icon: <Award className="h-10 w-10 text-solar-blue" />,
    count: "8+",
    label: "Years of Experience"
  },
  {
    icon: <Home className="h-10 w-10 text-solar-blue" />,
    count: "5,000+",
    label: "Homes Solarised"
  },
  {
    icon: <Zap className="h-10 w-10 text-solar-blue" />,
    count: "25+ MWp",
    label: "Installation Experience"
  },
  {
    icon: <CreditCard className="h-10 w-10 text-solar-blue" />,
    count: "₹20 Cr+",
    label: "Savings Across Odisha"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-solar-dark-blue">
          Why Thousands of Families Trust Clans
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-5 rounded-2xl mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-1 text-solar-dark-blue">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
