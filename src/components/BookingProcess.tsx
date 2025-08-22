import { MessageSquare, Heart, Calendar } from "lucide-react";

const BookingProcess = () => {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Haz Clic",
      description: "Presiona el botón y escríbenos a WhatsApp.",
    },
    {
      number: "2",
      icon: Heart,
      title: "Elige",
      description: "Cuéntanos qué servicio y diseño quieres.",
    },
    {
      number: "3",
      icon: Calendar,
      title: "Reserva",
      description: "Abona $10.000 para asegurar tu cupo. ¡Listo!",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-luxury-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-luxury-dark mb-4">
            Tu Cita en{" "}
            <span className="font-medium bg-gradient-to-r from-luxury-mint to-luxury-lavender bg-clip-text text-transparent">
              3 Simples Pasos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El proceso más fácil para transformar tu sonrisa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Step number and connector */}
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-shine rounded-full shadow-soft group-hover:shadow-luxury transition-all duration-300 relative z-10">
                  <span className="text-2xl font-medium text-luxury-dark">
                    {step.number}
                  </span>
                </div>
                
                {/* Connector line (hidden on last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-luxury-mint to-luxury-lavender transform translate-x-8 -z-10"></div>
                )}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-luxury-white rounded-xl shadow-soft mb-6 group-hover:shadow-luxury group-hover:transform group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-6 h-6 text-luxury-mint" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-luxury-dark mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-luxury-white rounded-full px-6 py-3 shadow-soft">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Respondemos en menos de 5 minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;