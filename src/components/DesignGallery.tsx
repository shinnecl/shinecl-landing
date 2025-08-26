import { Button } from "@/components/ui/button";
import crystalDesigns from "@/assets/crystal-designs.jpg";
import { Sparkles } from "lucide-react";

const DesignGallery = () => {
  const designs = [
    { name: "Mariposa", price: "$49.990" },
    { name: "Diente Azucarado", price: "$49.990" },
    { name: "Diseño con 1 Cristal", price: "$29.990" },
    { name: "Estrella Brillante", price: "$39.990" },
    { name: "Corazón Elegante", price: "$44.990" },
    { name: "Luna Mística", price: "$42.990" },
  ];

  const handleWhatsAppClick = () => {
    const message = "Hola! Me interesa conocer más sobre los diseños de cristales dentales ✨";
    const phoneNumber = "56949615790"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-luxury-white to-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-luxury-dark mb-4 px-2 sm:px-0">
            Encuentra tu{" "}
            <span className="gradient-text">
              Brillo Perfecto
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Cada diseño es único y personalizado para tu sonrisa
          </p>
        </div>

        {/* Featured Gallery Image */}
        <div className="mb-8 sm:mb-12">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-luxury max-w-4xl mx-auto">
            <img 
              src={crystalDesigns} 
              alt="Galería de diseños de cristales dentales shinne.cl - Variedad de cristales premium"
              className="w-full h-48 sm:h-64 lg:h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/20 to-transparent"></div>
          </div>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {designs.map((design, index) => (
            <div 
              key={index}
              className="bg-luxury-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-luxury transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-luxury-dark mb-1 sm:mb-2">
                    {design.name}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-light text-luxury-dark">
                    {design.price}
                  </p>
                </div>
                <div className="text-luxury-mint group-hover:animate-spin transition-all duration-300 ml-2">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center px-4 sm:px-0">
          <Button 
            variant="luxury" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="group w-full sm:w-auto text-sm sm:text-base"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin" />
            Ver Todos los Diseños
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;