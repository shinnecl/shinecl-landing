import { Button } from "@/components/ui/button";
import { Sparkles, Smile, Star } from "lucide-react";

const ComplementaryServices = () => {
  const services = [
    {
      icon: Smile,
      title: "Limpieza Dental Completa",
      description: "La base ideal para una sonrisa sana y un brillo duradero.",
      price: "$29.990",
      highlight: false,
    },
    {
      icon: Star,
      title: "Blanqueamiento + Limpieza",
      description: "El combo glow-up definitivo para una sonrisa de alto impacto.",
      price: "$79.990",
      highlight: true,
    },
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = `Hola! Me interesa el servicio: ${service} ✨`;
    const phoneNumber = "56949615790"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-luxury-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-luxury-dark mb-4 px-2 sm:px-0">
            Prepara tu Sonrisa para el{" "}
            <span className="gradient-text">
              Máximo Impacto
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Servicios complementarios para una sonrisa perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 group hover:transform hover:scale-105 ${
                service.highlight 
                  ? 'bg-gradient-shine shadow-luxury border-2 border-luxury-mint' 
                  : 'bg-luxury-white shadow-soft hover:shadow-luxury'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-luxury-lavender text-luxury-dark px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    Más Popular
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 ${
                  service.highlight ? 'bg-luxury-white' : 'bg-gradient-shine'
                } shadow-soft group-hover:shadow-luxury transition-all duration-300`}>
                  <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${
                    service.highlight ? 'text-luxury-mint' : 'text-luxury-dark'
                  }`} />
                </div>

                <h3 className="text-lg sm:text-xl font-medium text-luxury-dark mb-3 sm:mb-4">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-light text-luxury-dark">
                    {service.price}
                  </span>
                </div>

                <Button 
                  variant={service.highlight ? "whatsapp" : "luxury"}
                  size="lg"
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full group text-sm sm:text-base"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin" />
                  Agendar Servicio
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplementaryServices;