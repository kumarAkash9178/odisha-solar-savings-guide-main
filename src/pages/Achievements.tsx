import { Trophy, Award, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CertificateSlider from '../components/CertificateSlider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Achievements = () => {
  const stats = [
    {
      icon: Trophy,
      title: "Quality Certifications",
      value: "7+",
      description: "International & National Standards"
    },
    {
      icon: Award,
      title: "Years of Excellence",
      value: "4+",
      description: "Consistent Quality Since 2020"
    },
    {
      icon: Star,
      title: "Zero Defect",
      value: "ZED",
      description: "Certified Manufacturing Process"
    },
    {
      icon: CheckCircle,
      title: "ISO Compliance",
      value: "9001:2015",
      description: "Quality Management System"
    }
  ];

  const achievements = [
    {
      title: "Government Recognition",
      description: "Officially registered with multiple government bodies including MSME, GST, and Trade Marks Registry",
      highlights: ["UDYAM Registration", "GST Compliance", "Trademark Protected"]
    },
    {
      title: "Quality Excellence",
      description: "Certified for international quality standards in manufacturing and design processes",
      highlights: ["ISO 9001:2015", "CE Compliance", "Quality Management"]
    },
    {
      title: "Sustainable Manufacturing",
      description: "Committed to zero defect and zero effect manufacturing processes",
      highlights: ["ZED Certification", "Environmental Compliance", "Sustainable Practices"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-accent/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <Link to="/">
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex items-center bg-white/80 backdrop-blur border border-gray-300 text-gray-800 shadow-md hover:bg-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              Certified Excellence
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
              Our Certifications & Achievements
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              CLANS Machina stands proud with multiple certifications and recognitions that validate our commitment to quality, sustainability, and excellence in manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Slider Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Certificate Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of certifications that demonstrate our commitment to quality and compliance
            </p>
          </div>

          <CertificateSlider />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-br from-muted/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our journey of excellence is marked by significant milestones and recognitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{achievement.description}</p>
                  <div className="space-y-2">
                    {achievement.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2 mb-2 bg-primary/10 text-primary border-primary/20">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quality You Can Trust
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our certifications aren't just documents—they're our promise of quality, safety, and excellence in every product we deliver.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
