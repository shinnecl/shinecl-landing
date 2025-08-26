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
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden hero-section">
      {/* Background decorative elements - mobile optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-8 sm:top-16 lg:top-20 left-2 sm:left-4 lg:left-10 text-luxury-mint/15 text-2xl sm:text-4xl lg:text-6xl xl:text-8xl">
          <Sparkles />
        </div>
        <div className="absolute bottom-8 sm:bottom-16 lg:bottom-20 right-2 sm:right-4 lg:right-10 text-luxury-lavender/15 text-xl sm:text-3xl lg:text-5xl xl:text-6xl">
          <Sparkles />
        </div>
        <div className="absolute top-1/2 left-1/12 sm:left-1/6 lg:left-1/4 text-luxury-mint/8 text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
          <Sparkles />
        </div>
      </div>

      {/* Mobile-first layout */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Content section - mobile first */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 hero-content">
          <div className="w-full max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              
              {/* Text content - appears first on mobile */}
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-luxury-dark leading-[1.1] sm:leading-tight">
                    Tu Sonrisa,{" "}
                    <span className="gradient-text block sm:inline">
                      Tu Joya
                    </span>
                  </h1>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-luxury-dark">
                    Brilla con Seguridad.
                  </h2>
                </div>
                
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8">
                  Cristales dentales premium aplicados por dentistas profesionales en el corazón de Vitacura. 
                  <span className="font-medium text-luxury-dark"> Cero dolor, cero daño, 100% brillo.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button 
                    variant="whatsapp" 
                    size="xl"
                    onClick={handleWhatsAppClick}
                    className="group w-full sm:w-auto min-h-[48px] text-sm sm:text-base font-medium"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin flex-shrink-0" />
                    <span className="truncate">Agendar mi Cita por WhatsApp</span>
                  </Button>
                </div>
              </div>

              {/* Image - mobile optimized */}
              <div className="relative order-first lg:order-last">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-luxury max-w-md mx-auto lg:max-w-none">
                  <img 
                    src={heroImage} 
                    alt="Cristal dental premium shinne.cl - Sonrisa perfecta con cristal verde mint"
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-mint/10 to-transparent"></div>
                </div>
                
                {/* Floating elements - mobile optimized */}
                <div className="absolute -top-1 sm:-top-2 lg:-top-4 -right-1 sm:-right-2 lg:-right-4 text-luxury-lavender animate-float">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                </div>
                <div className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-4 -left-1 sm:-left-2 lg:-left-4 text-luxury-mint animate-float" style={{animationDelay: '1s'}}>
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;