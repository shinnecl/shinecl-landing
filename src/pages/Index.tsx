import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import DesignGallery from "@/components/DesignGallery";
import ComplementaryServices from "@/components/ComplementaryServices";
import BookingProcess from "@/components/BookingProcess";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ValueProposition />
      <DesignGallery />
      <ComplementaryServices />
      <BookingProcess />
      <FinalCTA />
    </main>
  );
};

export default Index;
