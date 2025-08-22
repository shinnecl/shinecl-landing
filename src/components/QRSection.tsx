import { Smartphone, QrCode } from "lucide-react";

const QRSection = () => {
  const whatsappMessage = "Hola! Me interesa agendar una cita para cristales dentales en shinne.cl ✨";
  const phoneNumber = "56912345678"; // Replace with actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Generate QR code URL using qr-server.com service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}`;

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <QrCode className="w-6 h-6 text-luxury-mint" />
            <h3 className="text-2xl font-light text-luxury-dark">
              Escanea y{" "}
              <span className="font-medium bg-gradient-to-r from-luxury-mint to-luxury-lavender bg-clip-text text-transparent">
                Agenda Rápido
              </span>
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Escanea el código QR con tu celular para ir directo a WhatsApp
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* QR Code */}
            <div className="bg-luxury-white p-6 rounded-2xl shadow-luxury">
              <img 
                src={qrCodeUrl}
                alt="Código QR para contactar shinne.cl por WhatsApp"
                className="w-48 h-48 mx-auto"
              />
            </div>

            {/* Instructions */}
            <div className="text-left space-y-4 max-w-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-shine rounded-full flex items-center justify-center text-sm font-medium text-luxury-dark">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-luxury-dark mb-1">Abre la cámara</h4>
                  <p className="text-sm text-muted-foreground">Usa la cámara de tu celular</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-shine rounded-full flex items-center justify-center text-sm font-medium text-luxury-dark">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-luxury-dark mb-1">Escanea el QR</h4>
                  <p className="text-sm text-muted-foreground">Apunta hacia el código</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-shine rounded-full flex items-center justify-center text-sm font-medium text-luxury-dark">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-luxury-dark mb-1">¡Chatea con nosotras!</h4>
                  <p className="text-sm text-muted-foreground">Te abrirá WhatsApp automáticamente</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Smartphone className="w-4 h-4" />
            <span>Disponible 24/7 para responder tus dudas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;