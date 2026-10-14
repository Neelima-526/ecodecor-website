import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

export default function BookingPage() {
  const location = useLocation();
  const prefilledTheme = location.state?.preferredTheme || '';

  return (
    <div className="pt-24 bg-[#faf7f2] min-h-screen">
      <BookingForm selectedTheme={prefilledTheme} />
    </div>
  );
}
