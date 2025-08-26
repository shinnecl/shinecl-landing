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
      {/* Background decorative elements - mobile optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 text-luxury-mint/20 text-4xl sm:text-6xl lg:text-8xl">
          <Sparkles />
        </div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 text-luxury-lavender/20 text-3xl sm:text-5xl lg:text-6xl">
          <Sparkles />
        </div>
        <div className="absolute top-1/2 left-1/6 sm:left-1/4 text-luxury-mint/10 text-2xl sm:text-3xl lg:text-4xl">
          <Sparkles />
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-luxury-dark leading-tight">
                Tu Sonrisa,{" "}
                <span className="gradient-text">
                  Tu Joya
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-luxury-dark">
                Brilla con Seguridad.
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              Cristales dentales premium aplicados por dentistas profesionales en el corazón de Vitacura. 
              <span className="font-medium text-luxury-dark"> Cero dolor, cero daño, 100% brillo.</span>
            </p>

            <div className="flex flex-col gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={handleWhatsAppClick}
                className="group w-full sm:w-auto text-sm sm:text-base"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin" />
                <span className="sm:hidden">Agendar Cita</span>
                <span className="hidden sm:inline">Agendar mi Cita por WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Image - mobile optimized */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-luxury">
              <img 
                src={heroImage} 
                alt="Cristal dental premium shinne.cl - Sonrisa perfecta con cristal verde mint"
                className="w-full h-64 sm:h-80 lg:h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-mint/10 to-transparent"></div>
            </div>
            
            {/* Floating elements - smaller on mobile */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 text-luxury-lavender animate-float">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 text-luxury-mint animate-float" style={{animationDelay: '1s'}}>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;