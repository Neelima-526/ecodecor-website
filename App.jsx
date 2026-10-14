import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import KitsPage from './pages/KitsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import BenefitsPage from './pages/BenefitsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#faf7f2] text-[#1c2e24] font-sans antialiased flex flex-col justify-between selection:bg-[#1b4332] selection:text-white">
        {/* Sticky Header */}
        <Navbar />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/kits" element={<KitsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
