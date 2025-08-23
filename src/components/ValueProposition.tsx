import { Shield, Search, Gem } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Shield,
      title: "Operado por Dentistas",
      description: "Tu esmalte está seguro. Usamos materiales de ortodoncia de la más alta calidad.",
    },
    {
      icon: Search,
      title: "Evaluación Gratuita",
      description: "Antes de brillar, nos aseguramos de que tu sonrisa esté sana. Incluido en tu cita.",
    },
    {
      icon: Gem,
      title: "Garantía de 1 Mes",
      description: "Amamos tanto nuestro trabajo que si tu cristal se cae, te lo reinstalamos sin costo.",
    },
  ];

  return (
    <section className="py-20 bg-luxury-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-luxury-dark mb-4">
            ¿Por qué shinne.cl es tu{" "}
            <span className="gradient-text">
              opción segura?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-shine rounded-2xl mb-6 shadow-soft group-hover:shadow-luxury transition-all duration-300">
                <value.icon className="w-8 h-8 text-luxury-dark" />
              </div>
              
              <h3 className="text-xl font-medium text-luxury-dark mb-4">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;