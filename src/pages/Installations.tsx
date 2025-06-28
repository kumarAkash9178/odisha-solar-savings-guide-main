import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowLeft, Play, Star, CheckCircle } from "lucide-react";

const Installation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-solar-light via-white to-solar-light/50">
      <Link to="/">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>
      {/* Header with Company Logo */}
      {/* <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4b7b9345-0bb3-485c-a3df-af0f07af4b88.png" 
                alt="Clans Machina Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-solar-tertiary">Clans Machina</span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-solar-tertiary mb-6">
                Powering Odisha with 
                <span className="text-solar-primary block">Solar Energy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join the renewable energy revolution with our premium solar panel installations 
                across Odisha. Clean, efficient, and cost-effective energy solutions for your home and business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-solar-primary hover:bg-solar-secondary text-white px-8 py-3">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-solar-primary text-solar-primary hover:bg-solar-primary hover:text-white px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop" 
                alt="Solar panels in Odisha landscape"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-solar-primary p-3 rounded-full">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-solar-tertiary">500+ kW</div>
                    <div className="text-sm text-gray-600">Total Installed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      Features Section
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-solar-tertiary mb-4">
              Why Choose Solar Energy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of switching to clean, renewable solar energy for your property
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-solar-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="/lovable-uploads/4b7b9345-0bb3-485c-a3df-af0f07af4b88.png" 
                    alt="Clans Machina" 
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="text-2xl font-bold text-solar-tertiary mb-4">Clean Energy</h3>
                <p className="text-gray-600">
                  Harness the power of the sun to generate clean, renewable energy 
                  and reduce your carbon footprint significantly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-solar-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-solar-tertiary mb-4">Cost Savings</h3>
                <p className="text-gray-600">
                  Dramatically reduce your electricity bills and enjoy long-term 
                  savings with our efficient solar panel systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-solar-tertiary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-solar-tertiary mb-4">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Contribute to a sustainable future by reducing greenhouse gas 
                  emissions and protecting our environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Our Installations Section */}
      <section className="py-20 bg-gradient-to-r from-solar-primary/10 to-solar-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-solar-tertiary mb-4">
              Our Solar Installations Across Odisha
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our successful solar projects and installations across
              different cities in Odisha
            </p>
          </div>

          {/* Featured Installations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop"
                alt="Bhubaneswar Solar Installation"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-solar-secondary mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">Bhubaneswar, Odisha</span>
                </div>
                <h3 className="text-xl font-bold text-solar-tertiary mb-2">
                  Residential Solar Farm
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  5 kW installation providing clean energy to modern homes
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600">
                    Completed in 2024
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop"
                alt="Cuttack Solar Installation"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-solar-secondary mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">Cuttack, Odisha</span>
                </div>
                <h3 className="text-xl font-bold text-solar-tertiary mb-2">
                  Commercial Solar Project
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  50 kW system powering local businesses efficiently
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600">
                    Completed in 2024
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
                alt="Puri Solar Installation"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-solar-secondary mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">Puri, Odisha</span>
                </div>
                <h3 className="text-xl font-bold text-solar-tertiary mb-2">
                  Community Solar Initiative
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  25 kW project serving rural communities sustainably
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600">
                    Completed in 2024
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=250&fit=crop"
                alt="Rourkela Solar Installation"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-solar-secondary mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">Rourkela, Odisha</span>
                </div>
                <h3 className="text-xl font-bold text-solar-tertiary mb-2">
                  Industrial Solar Complex
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  100 kW industrial installation for manufacturing units
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600">
                    Completed in 2023
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=250&fit=crop"
                alt="Berhampur Solar Installation"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-solar-secondary mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">Berhampur, Odisha</span>
                </div>
                <h3 className="text-xl font-bold text-solar-tertiary mb-2">
                  Agricultural Solar Pumps
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  15 kW solar-powered irrigation systems for farmers
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600">
                    Completed in 2023
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop"
                alt="Sambalpur Solar Installation"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center text-solar-secondary mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">Sambalpur, Odisha</span>
                </div>
                <h3 className="text-xl font-bold text-solar-tertiary mb-2">
                  Educational Institution Solar
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  30 kW system powering schools and colleges
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600">
                    Completed in 2024
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Gallery Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-solar-tertiary text-center mb-8">
              Installation Process Videos
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="relative bg-gray-900 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg">
                      Bhubaneswar Installation Timelapse
                    </p>
                    <p className="text-sm opacity-70">5 min video</p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative bg-gray-900 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg">Rural Solar Project Documentary</p>
                    <p className="text-sm opacity-70">8 min video</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-solar-primary mb-2">
                500+
              </div>
              <div className="text-gray-600">kW Installed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-solar-primary mb-2">
                50+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-solar-primary mb-2">
                15+
              </div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-solar-primary mb-2">
                100+
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-solar-tertiary mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Clans Machina installed our solar panels with great
                  professionalism. Our electricity bills have reduced by 80%!"
                </p>
                <h4 className="font-bold text-solar-tertiary">Rajesh Kumar</h4>
                <p className="text-sm text-gray-500">Bhubaneswar</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Excellent service and quality installation. The team was very
                  knowledgeable and completed the work on time."
                </p>
                <h4 className="font-bold text-solar-tertiary">Priya Sharma</h4>
                <p className="text-sm text-gray-500">Cuttack</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Great investment for our business. The solar installation
                  pays for itself through energy savings."
                </p>
                <h4 className="font-bold text-solar-tertiary">Amit Patel</h4>
                <p className="text-sm text-gray-500">Rourkela</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 bg-gradient-to-r from-solar-primary via-solar-secondary to-solar-tertiary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Go Solar with Clans Machina?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across Odisha who have made the switch to clean, 
            affordable solar energy. Get your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-solar-primary px-8 py-3">
              Get Free Quote Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-solar-primary px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-solar-tertiary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="/lovable-uploads/4b7b9345-0bb3-485c-a3df-af0f07af4b88.png" 
              alt="Clans Machina Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold">Clans Machina</span>
          </div>
          <p className="text-gray-300 mb-4">
            Leading solar energy solutions across Odisha
          </p>
          <p className="text-sm text-gray-400">
            © 2024 Clans Machina. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default Installation;
