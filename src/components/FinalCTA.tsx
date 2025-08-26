import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    const message = "¡Hola! Estoy lista para transformar mi sonrisa con shinne.cl ✨ Quiero agendar mi cita";
    const phoneNumber = "56949615790"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements - mobile optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-6 sm:top-10 left-4 sm:left-10 text-luxury-white/10 text-3xl sm:text-5xl lg:text-6xl">
          <Sparkles />
        </div>
        <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 text-luxury-white/10 text-4xl sm:text-6xl lg:text-8xl">
          <Sparkles />
        </div>
        <div className="absolute top-1/3 right-1/6 sm:right-1/4 text-luxury-white/5 text-2xl sm:text-3xl lg:text-4xl">
          <Sparkles />
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-luxury-dark px-2 sm:px-0">
              ¿Lista para{" "}
              <span className="gradient-text">
                transformar
              </span>{" "}
              tu sonrisa?
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Tu cita para brillar está a solo un mensaje de distancia.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-light text-luxury-dark">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Sonrisas Transformadas</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-light text-luxury-dark">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Seguridad Garantizada</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-light text-luxury-dark">5★</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Valoración Promedio</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              variant="whatsapp" 
              size="xl"
              onClick={handleWhatsAppClick}
              className="group w-full sm:w-auto text-sm sm:text-base"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin" />
              <span className="sm:hidden">¡Agendar Ahora!</span>
              <span className="hidden sm:inline">¡Sí, Quiero Agendar Ahora!</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>

          {/* Trust indicators */}
          <div className="pt-6 sm:pt-8 border-t border-luxury-mint/20 px-2 sm:px-0">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                Dentistas Certificados
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                Materiales Premium
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                Garantía Incluida
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;