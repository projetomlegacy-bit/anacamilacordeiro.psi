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
import { PaletteTester } from "./components/PaletteTester";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preferredModalidade, setPreferredModalidade] = useState<"presencial" | "online">("presencial");
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [theme, setTheme] = useState<"terra-lavanda" | "original">("terra-lavanda");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleOpenBooking = (modalidade: "presencial" | "online" = "presencial") => {
    setPreferredModalidade(modalidade);
    setBookingOpen(true);
  };

  const handleSelectSpecialty = (specialty: string) => {
    handleOpenBooking("presencial");
  };

  return (
    <div
      data-theme={theme}
      className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent/20 selection:text-primary transition-colors duration-300"
    >
      {/* Header */}
      <Header onOpenBooking={() => handleOpenBooking("presencial")} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking("presencial")} />
        <About />
        <Symptoms onOpenBooking={() => handleOpenBooking("presencial")} />
        <Approaches />
        <Services onOpenBooking={handleOpenBooking} />
        <Testimonials />
        <Faq onOpenBooking={() => handleOpenBooking("presencial")} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onSelectSpecialty={handleSelectSpecialty}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Interactive Palette Testing & Comparison Tool */}
      <PaletteTester currentTheme={theme} onThemeChange={setTheme} />

      {/* Booking / Appointment Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialModalidade={preferredModalidade}
      />

      {/* Legal Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  );
}

