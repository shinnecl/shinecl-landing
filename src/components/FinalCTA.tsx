import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    const message = "¡Hola! Estoy lista para transformar mi sonrisa con shinne.cl ✨ Quiero agendar mi cita";
    const phoneNumber = "56933445566"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-luxury-white/10 text-6xl">
          <Sparkles />
        </div>
        <div className="absolute bottom-10 right-10 text-luxury-white/10 text-8xl">
          <Sparkles />
        </div>
        <div className="absolute top-1/3 right-1/4 text-luxury-white/5 text-4xl">
          <Sparkles />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-light text-luxury-dark">
              ¿Lista para{" "}
              <span className="gradient-text">
                transformar
              </span>{" "}
              tu sonrisa?
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Tu cita para brillar está a solo un mensaje de distancia.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 py-8">
            <div className="space-y-2">
              <div className="text-3xl font-light text-luxury-dark">500+</div>
              <div className="text-sm text-muted-foreground">Sonrisas Transformadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-luxury-dark">100%</div>
              <div className="text-sm text-muted-foreground">Seguridad Garantizada</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-luxury-dark">5★</div>
              <div className="text-sm text-muted-foreground">Valoración Promedio</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp" 
              size="xl"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              ¡Sí, Quiero Agendar Ahora!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-luxury-mint/20">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Dentistas Certificados
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Materiales Premium
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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