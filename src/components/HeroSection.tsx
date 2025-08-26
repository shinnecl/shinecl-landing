import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dental-crystal.jpg";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola! Me interesa agendar una cita para cristales dentales en shinne.cl ✨";
    const phoneNumber = "56949615790"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-luxury-mint/20 text-8xl">
          <Sparkles />
        </div>
        <div className="absolute bottom-20 right-10 text-luxury-lavender/20 text-6xl">
          <Sparkles />
        </div>
        <div className="absolute top-1/2 left-1/4 text-luxury-mint/10 text-4xl">
          <Sparkles />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-light text-luxury-dark leading-tight">
                Tu Sonrisa,{" "}
                <span className="gradient-text">
                  Tu Joya
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-luxury-dark">
                Brilla con Seguridad.
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Cristales dentales premium aplicados por dentistas profesionales en el corazón de Vitacura. 
              <span className="font-medium text-luxury-dark"> Cero dolor, cero daño, 100% brillo.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={handleWhatsAppClick}
                className="group"
              >
                <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                Agendar mi Cita por WhatsApp
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-luxury">
              <img 
                src={heroImage} 
                alt="Cristal dental premium shinne.cl - Sonrisa perfecta con cristal verde mint"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-mint/10 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 text-luxury-lavender animate-float">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-4 -left-4 text-luxury-mint animate-float" style={{animationDelay: '1s'}}>
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;