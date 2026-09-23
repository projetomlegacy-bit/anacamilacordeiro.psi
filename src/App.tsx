/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Symptoms } from "./components/Symptoms";
import { Approaches } from "./components/Approaches";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { BookingModal } from "./components/BookingModal";
import { PrivacyModal, TermsModal } from "./components/LegalModals";
import { AcquisitionLPs } from "./components/AcquisitionLPs";
import { PaletteTester } from "./components/PaletteTester";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preferredModalidade, setPreferredModalidade] = useState<"presencial" | "online">("presencial");
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [theme, setTheme] = useState<"terra-lavanda" | "original">("terra-lavanda");
  const [activeLp, setActiveLp] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Handle URL hash for dedicated Acquisition Landing Pages (e.g. #lp=ansiedade)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#lp=")) {
        const slug = hash.replace("#lp=", "");
        setActiveLp(slug);
        window.scrollTo(0, 0);
      } else {
        setActiveLp(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleOpenBooking = (modalidade: "presencial" | "online" = "presencial") => {
    setPreferredModalidade(modalidade);
    setBookingOpen(true);
  };

  const handleSelectLp = (slug: string) => {
    window.location.hash = `#lp=${slug}`;
    setActiveLp(slug);
    window.scrollTo(0, 0);
  };

  const handleCloseLp = () => {
    window.location.hash = "";
    setActiveLp(null);
  };

  return (
    <div
      data-theme={theme}
      className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-primary transition-colors duration-300"
    >
      {/* Header */}
      <Header onOpenBooking={() => handleOpenBooking("presencial")} />

      {/* Main Content following live site architecture */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero onOpenBooking={() => handleOpenBooking("presencial")} />

        {/* 2. SOBRE / CONVITE À PAUSA (Copy requested + 3 Cards + Quote Card) */}
        <About />

        {/* 3. SINTOMAS / COMO POSSO TE AJUDAR (6 cards interativos + modal) */}
        <Symptoms onOpenBooking={() => handleOpenBooking("presencial")} />

        {/* 4. ABORDAGENS (PBE, TCC, Humanizada) */}
        <Approaches />

        {/* 5. SERVIÇOS (Modalidades Presencial e Online + Duração) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 6. DEPOIMENTOS */}
        <Testimonials />

        {/* 7. FAQ & CONTATO */}
        <Faq onOpenBooking={() => handleOpenBooking("presencial")} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onSelectSpecialty={handleSelectLp}
      />

      {/* Dedicated Acquisition LP overlay if navigated via URL */}
      {activeLp && (
        <AcquisitionLPs
          currentLpSlug={activeLp}
          onClose={handleCloseLp}
          onSelectLp={handleSelectLp}
        />
      )}

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Theme Switcher */}
      <PaletteTester currentTheme={theme} onThemeChange={setTheme} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialModalidade={preferredModalidade}
      />
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
      <TermsModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />
    </div>
  );
}
