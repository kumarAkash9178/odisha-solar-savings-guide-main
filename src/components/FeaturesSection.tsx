
import { Shield, Wrench, FileText } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Makes Us Different
            </h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4">
                  <Shield className="h-10 w-10 text-solar-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cyclone-proof, safe solar structures</h3>
                  <p className="text-gray-600">
                    Our structures are approved to handle 170 kmph wind speeds - specially designed for Odisha's coastal climate.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <Wrench className="h-10 w-10 text-solar-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">5-year maintenance promise</h3>
                  <p className="text-gray-600">
                    This includes quarterly deep cleaning, health checks & repairs - giving you peace of mind.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <FileText className="h-10 w-10 text-solar-yellow" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">₹1,38,000 government subsidy</h3>
                  <p className="text-gray-600">
                    We take care of all your subsidy paperwork. With us, your subsidy disbursal is quick and assured.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 md:p-10 order-1 md:order-2">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Get Instant EMI Approval</h3>
              <p className="text-gray-600">
                With Clans, you get easy EMI options for 3, 6, 12 & 60 months.
              </p>
            </div>
            
            <div className="bg-solar-yellow/10 p-5 rounded-lg mb-6">
              <h4 className="font-semibold text-lg mb-2">Pro-Tip: Get Solar At Zero Investment</h4>
              <p className="text-gray-700">
                Government subsidy covers your down payment, and monthly solar savings cover your EMIs.
              </p>
            </div>
            
            <div className="text-center">
              <a 
                href="#calculator" 
                className="inline-block bg-solar-yellow hover:bg-solar-yellow/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Calculate Your Savings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
