
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Pradeep Mohanty",
    location: "Bhubaneswar",
    text: "Being an engineer myself, I am extremely satisfied with the team of Odisha Solar. They have done an amazing job in the construction of my solar system. The team is very efficient and knowledgeable. They installed my system in just two days. I highly recommend them to everyone.",
  },
  {
    name: "Sunita Patel",
    location: "Cuttack",
    text: "I'm not a technical person, but the team did everything perfectly even though I wasn't present on site. I was worried about the installation. But I am so excited now. My bill has gone down from Rs 4300 to Rs 800!",
  },
  {
    name: "Ravi Kumar",
    location: "Puri",
    text: "The service was excellent. They explained everything in detail and helped me understand how much I could save. The installation was quick and professional. Now I'm enjoying lower electricity bills and contributing to a greener Odisha.",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">90% of customers recommend us!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just believe us - read the reviews for yourself.
          </p>
          
          <div className="flex items-center justify-center mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-solar-yellow fill-solar-yellow" />
              ))}
            </div>
            <span className="ml-2 font-medium">4.8/5 Google Rating 600+ reviews</span>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-solar-blue text-white flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
