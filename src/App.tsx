/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from "react";
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

// Code splitting / Lazy loading components that are not needed on initial mobile paint
const BookingModal = lazy(() => import("./components/BookingModal").then(m => ({ default: m.BookingModal })));
const PrivacyModal = lazy(() => import("./components/LegalModals").then(m => ({ default: m.PrivacyModal })));
const TermsModal = lazy(() => import("./components/LegalModals").then(m => ({ default: m.TermsModal })));
const AcquisitionLPs = lazy(() => import("./components/AcquisitionLPs").then(m => ({ default: m.AcquisitionLPs })));
const BrandGuide = lazy(() => import("./components/BrandGuide").then(m => ({ default: m.BrandGuide })));

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preferredModalidade, setPreferredModalidade] = useState<"presencial" | "online">("presencial");
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [theme] = useState<"terra-lavanda" | "original">("terra-lavanda");
  const [activeLp, setActiveLp] = useState<string | null>(null);
  const [brandGuideOpen, setBrandGuideOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Handle URL hash for dedicated Acquisition Landing Pages or Brand Guide
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#manual-da-marca" || hash === "#brand-guide") {
        setBrandGuideOpen(true);
        setActiveLp(null);
        window.scrollTo(0, 0);
      } else if (hash.startsWith("#lp=")) {
        const slug = hash.replace("#lp=", "");
        setActiveLp(slug);
        setBrandGuideOpen(false);
        window.scrollTo(0, 0);
      } else {
        setActiveLp(null);
        setBrandGuideOpen(false);
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

  const handleOpenBrandGuide = () => {
    window.location.hash = "#manual-da-marca";
    setBrandGuideOpen(true);
    window.scrollTo(0, 0);
  };

  const handleCloseBrandGuide = () => {
    window.location.hash = "";
    setBrandGuideOpen(false);
  };

  // If user navigated to Brand Style Guide, display the dedicated Branding Manual
  if (brandGuideOpen) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#332A29] flex items-center justify-center text-white">Carregando Manual da Marca...</div>}>
        <BrandGuide onClose={handleCloseBrandGuide} />
      </Suspense>
    );
  }

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

        {/* 2. SOBRE / CONVITE À PAUSA */}
        <About />

        {/* 3. SINTOMAS / COMO POSSO TE AJUDAR */}
        <Symptoms onOpenBooking={() => handleOpenBooking("presencial")} />

        {/* 4. ABORDAGENS (Psicanálise, Acolhimento) */}
        <Approaches />

        {/* 5. SERVIÇOS (Modalidades Presencial e Online) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 6. DEPOIMENTOS */}
        <Testimonials />

        {/* 7. FAQ & CONTATO */}
        <Faq onOpenBooking={() => handleOpenBooking("presencial")} />
      </main>

      {/* Footer with discreet link to Brand Guide */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onSelectSpecialty={handleSelectLp}
        onOpenBrandGuide={handleOpenBrandGuide}
      />

      {/* Dedicated Acquisition LP overlay if navigated via URL */}
      {activeLp && (
        <Suspense fallback={null}>
          <AcquisitionLPs
            currentLpSlug={activeLp}
            onClose={handleCloseLp}
            onSelectLp={handleSelectLp}
          />
        </Suspense>
      )}

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Interactive Modals */}
      <Suspense fallback={null}>
        {bookingOpen && (
          <BookingModal
            isOpen={bookingOpen}
            onClose={() => setBookingOpen(false)}
            initialModalidade={preferredModalidade}
          />
        )}
        {privacyOpen && (
          <PrivacyModal
            isOpen={privacyOpen}
            onClose={() => setPrivacyOpen(false)}
          />
        )}
        {termsOpen && (
          <TermsModal
            isOpen={termsOpen}
            onClose={() => setTermsOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}
