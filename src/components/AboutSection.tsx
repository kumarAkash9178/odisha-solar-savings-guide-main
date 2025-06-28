
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-solar-dark-blue">About Clans</h2>
          <p className="text-lg text-gray-700 mb-6">
            That's who we are!
          </p>
          <p className="text-gray-600 mb-6">
            Clans has earned the name of being the most-trusted solar company in Bhubaneswar – all over Odisha, in general – since its launch in 2015 not because of making promises, but by keeping those promises.
          </p>
          <p className="text-gray-600 mb-6">
            We were founded by two highly passionate engineers from IIT who wanted to light up lives and homes across Odisha with green electricity.
          </p>
          
          {/* Tata Solar Partnership Section */}
          <div className="rounded-lg p-6 mb-8 shadow-md" style={{ backgroundColor: '#2a5060' }}>
            <div className="flex flex-col items-center mb-4">
              <img 
                src="/lovable-uploads/e474deff-e93f-4bdb-a45e-130d00feda51.png" 
                alt="Tata Solar Logo" 
                className="h-16 mb-4 opacity-90 mix-blend-screen filter brightness-110"
              />
              <h3 className="text-xl font-bold text-white mb-2">Authorized Channel Partner</h3>
              <p className="text-white text-center">
                We are proud to be an <strong>authorized channel partner with Tata Solar</strong>. 
                Tata is known for quality throughout the whole country and has been trusted by millions of customers for decades.
              </p>
            </div>
          </div>

          {/* Joint Venture Section */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-md border-2 border-solar-medium-blue">
            <div className="flex flex-col items-center mb-4">
              <img 
                src="/lovable-uploads/90ee9929-417a-4f03-8c5f-ca4ab26b05a5.png" 
                alt="Clans Machina x Solar Apex JV Logo" 
                className="h-24 mb-4 opacity-90 mix-blend-multiply filter contrast-110"
              />
              <h3 className="text-xl font-bold text-solar-dark-blue mb-2">Joint Venture Partnership</h3>
              <p className="text-gray-700 text-center">
                We are in a <strong>joint venture with Solar Apex</strong>, combining our expertise and experience 
                to deliver the best solar solutions across Odisha and beyond.
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Our customers have been the heroes in our astounding journey since 2015:
          </p>
          
          <ul className="text-left mb-8 space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-solar-blue font-bold">•</span>
              <span>We've gone from strength to strength, now powering over 5,000 homes across Odisha</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-solar-blue font-bold">•</span>
              <span>Our team has grown to include over 100 solar experts committed to quality service</span>
            </li>
          </ul>
          
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} 
            className="bg-solar-blue hover:bg-solar-blue/90 text-white px-8 py-6 text-lg"
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
