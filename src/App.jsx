import React from "react";
import MedicalHero from "./components/MedicalHero";
import CapsuleHero from "./components/CapsuleHero";
import ServicesSection from "./components/ServicesSection";
import KeyHealthcareServices from "./components/KeyHealthcareServices";
import BookAppointmentBanner from "./components/BookAppointmentBanner";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <>
      <MedicalHero />
      <CapsuleHero />
      <ServicesSection />
      <KeyHealthcareServices />
      <BookAppointmentBanner />
      <FooterSection />
    </>
  );
}