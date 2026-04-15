import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { JournalSection } from "@/components/JournalSection";
import { ContactSection } from "@/components/ContactSection";
import { DeveloperSection } from "@/components/DeveloperSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <JournalSection />
      <ContactSection />
      <DeveloperSection />
      <Footer />
    </main>
  );
}
