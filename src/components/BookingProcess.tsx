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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-muted to-luxury-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-luxury-dark mb-4 px-2 sm:px-0">
            Tu Cita en{" "}
            <span className="gradient-text">
              3 Simples Pasos
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            El proceso más fácil para transformar tu sonrisa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group px-4 sm:px-0"
            >
              {/* Step number and connector */}
              <div className="relative mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-shine rounded-full shadow-soft group-hover:shadow-luxury transition-all duration-300 relative z-10">
                  <span className="text-xl sm:text-2xl font-medium text-luxury-dark">
                    {step.number}
                  </span>
                </div>
                
                {/* Connector line (hidden on mobile and last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-luxury-mint to-luxury-lavender transform translate-x-6 sm:translate-x-8 -z-10"></div>
                )}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-luxury-white rounded-lg sm:rounded-xl shadow-soft mb-4 sm:mb-6 group-hover:shadow-luxury group-hover:transform group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-mint" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-medium text-luxury-dark mb-3 sm:mb-4">
                {step.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 bg-luxury-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-soft">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Respondemos en menos de 5 minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;