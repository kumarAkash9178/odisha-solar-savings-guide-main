
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
          <p className="text-gray-600 mb-8">
            Our customers have been the heroes in our astounding journey since 2015:
          </p>
          
          <ul className="text-left mb-8 space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-solar-blue font-bold">•</span>
              <span>We started with the installation of a 73 kW system for the iconic Jagannath Temple in Puri</span>
            </li>
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
