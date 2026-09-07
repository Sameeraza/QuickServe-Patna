/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingForm } from './components/BookingForm';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { RatesModal } from './components/RatesModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isRatesOpen, setIsRatesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('AC & HVAC Servicing');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBooking = () => {
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-[#0B2545]">
      {/* Sticky Header Navbar */}
      <Navbar 
        onOpenRates={() => setIsRatesOpen(true)} 
        onBookClick={handleScrollToBooking} 
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero 
          onOpenRates={() => setIsRatesOpen(true)} 
          onSelectService={handleSelectService} 
        />

        {/* Services Categories Grid */}
        <ServicesGrid 
          onSelectService={handleSelectService} 
          onOpenRates={() => setIsRatesOpen(true)} 
        />

        {/* Why Choose Us (4-Card Grid) */}
        <WhyChooseUs />

        {/* Quick Booking Lead Capture Form */}
        <BookingForm initialService={selectedService} />

        {/* Social Proof / Google-Style Reviews */}
        <Reviews />
      </main>

      {/* Footer with Coverage Notice & Working Hours */}
      <Footer />

      {/* Floating WhatsApp and Mobile conversion buttons */}
      <FloatingWhatsApp onBookClick={handleScrollToBooking} />

      {/* Detailed Transparent Rates Modal */}
      <RatesModal 
        isOpen={isRatesOpen} 
        onClose={() => setIsRatesOpen(false)} 
        onSelectService={handleSelectService} 
      />
    </div>
  );
}
