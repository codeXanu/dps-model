import React from "react";
import ApplicationForm from "./components/ApplicationForm";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* CTA Section */}
      <HeroSection />
      
      {/* Main Form Section */}
      <main className="application-form-sec">
        <div className="application-cont w-container">
          <ApplicationForm />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
      
    </>
  );
}


