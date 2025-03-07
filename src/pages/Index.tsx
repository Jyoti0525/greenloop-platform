
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import CircularEconomy from "../components/home/CircularEconomy";
import Features from "../components/home/Features";
import Impact from "../components/home/Impact";
import CallToAction from "../components/home/CallToAction";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CircularEconomy />
        <Features />
        <Impact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
