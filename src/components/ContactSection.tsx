import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    billRange: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillRangeSelect = (range: string) => {
    setFormData((prev) => ({ ...prev, billRange: range }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      toast({
        title: "Please agree to the terms",
        description: "You must agree to the terms of service to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbypD0CuUo-m7UV0GU_jEffILJ1X8LxPzTRcHwvtmYygw18mWSAsSTdokF5ogIrMu_A2vQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast({
        title: "Consultation request sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        phone: "",
        pincode: "",
        billRange: "",
      });
      setAgreed(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Network error!",
        description: "Unable to send your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const billRanges = [
    "Less than ₹1500",
    "₹1500 - ₹2500",
    "₹2500 - ₹4000",
    "₹4000 - ₹8000",
    "More than ₹8000",
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-900 text-white p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">
                Book a FREE Solar Consultation
              </h2>
              <p className="mt-2">And save up to ₹1,38,000 with subsidy</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Full name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  WhatsApp number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode" className="text-gray-700">
                  Pin code <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="pincode"
                  name="pincode"
                  placeholder="Your area pin code"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-gray-700">
                  What is your average monthly bill?{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {billRanges.map((range) => (
                    <Button
                      key={range}
                      type="button"
                      variant={
                        formData.billRange === range ? "default" : "outline"
                      }
                      className={`border border-gray-300 ${
                        formData.billRange === range
                          ? "bg-solar-blue text-white"
                          : "bg-white text-gray-700"
                      }`}
                      onClick={() => handleBillRangeSelect(range)}
                    >
                      {range}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={() => setAgreed(!agreed)}
                  className="data-[state=checked]:bg-solar-blue"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to Clansmachina's terms of service & privacy policy
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !agreed}
              >
                {isSubmitting ? "Sending..." : "Get a FREE Quote"}
              </Button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Phone className="h-10 w-10 text-solar-yellow mb-3" />
              <p className="font-medium">Call Us</p>
              <p className="text-gray-600">+91 18008913731</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Mail className="h-10 w-10 text-solar-yellow mb-3" />
              <p className="font-medium">Email Us</p>
              <p className="text-gray-600">info@clansmachina.com</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <MapPin className="h-10 w-10 text-solar-yellow mb-3" />
              <p className="font-medium">Visit Us</p>
              <div className="text-gray-600 space-y-2">
                <p>
                  #307, 3rd Floor, DLF, Cybercity, Patia, Bhubaneswar - 751024
                  Odisha, India
                </p>
                <p>
                  Jalan Stesen Sentral, East Wing Level 3 , Kuala Lumpur Sentral
                  Kuala Lumpur 50470
                </p>
                <p>
                  #311, Abu Dhabi Plaza Hotel Apts, GreenHouse Building, Electra
                  Street, E3, Abu Dhabi, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
