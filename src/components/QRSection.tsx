import { Smartphone, QrCode } from "lucide-react";

const QRSection = () => {
  const whatsappMessage = "Hola! Me interesa agendar una cita para cristales dentales en shinne.cl ✨";
  const phoneNumber = "56949615790"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Generate QR code URL using qr-server.com service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;

  return (
    <section className="py-12 sm:py-16 bg-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <QrCode className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-mint" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-luxury-dark">
              Escanea y{" "}
              <span className="gradient-text">
                Agenda Rápido
              </span>
            </h3>
          </div>
          
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 px-2 sm:px-0">
            Escanea el código QR con tu celular para ir directo a WhatsApp
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8">
            {/* QR Code */}
            <div className="bg-luxury-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-luxury">
              <img 
                src={qrCodeUrl}
                alt="Código QR para contactar shinne.cl por WhatsApp"
                className="w-40 h-40 sm:w-48 sm:h-48 mx-auto"
              />
            </div>

            {/* Instructions */}
            <div className="text-left space-y-3 sm:space-y-4 max-w-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-shine rounded-full flex items-center justify-center text-xs sm:text-sm font-medium text-luxury-dark">
                  1
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-luxury-dark mb-1">Abre la cámara</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Usa la cámara de tu celular</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-shine rounded-full flex items-center justify-center text-xs sm:text-sm font-medium text-luxury-dark">
                  2
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-luxury-dark mb-1">Escanea el QR</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Apunta hacia el código</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-shine rounded-full flex items-center justify-center text-xs sm:text-sm font-medium text-luxury-dark">
                  3
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-luxury-dark mb-1">¡Chatea con nosotras!</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Te abrirá WhatsApp automáticamente</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground px-2 sm:px-0">
            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Disponible 24/7 para responder tus dudas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;