
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Calendar, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { certificates, Certificate } from '@/data/certificates';

const CertificateSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCertificate = certificates[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative">
        <Card className="overflow-hidden shadow-2xl border-2 border-primary/20">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Certificate Image */}
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/10 p-8 flex items-center justify-center min-h-[500px]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={currentCertificate.image}
                    alt={currentCertificate.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-background to-muted/20">
                <div className="space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
                      <Award className="w-3 h-3 mr-1" />
                      {currentCertificate.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {currentCertificate.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {currentCertificate.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">Date Issued:</span>
                      <span className="text-muted-foreground">{currentCertificate.dateIssued}</span>
                    </div>
                    
                    <div className="flex items-start gap-3 text-sm">
                      <Building className="w-4 h-4 text-primary mt-0.5" />
                      <span className="font-medium">Issued By:</span>
                      <span className="text-muted-foreground">{currentCertificate.issuedBy}</span>
                    </div>

                    {currentCertificate.certificateNumber && (
                      <div className="flex items-center gap-3 text-sm">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-medium">Certificate No:</span>
                        <span className="text-muted-foreground font-mono">
                          {currentCertificate.certificateNumber}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground shadow-lg z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground shadow-lg z-10"
          onClick={nextSlide}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-110'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Certificate Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} of {certificates.length}
        </span>
      </div>
    </div>
  );
};

export default CertificateSlider;
