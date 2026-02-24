"use client";

import { useEffect } from "react";
import { initScrollTrack } from "@/lib/track";
import HeaderSticky from "@/components/HeaderSticky";
import Hero from "@/components/Hero";
import ProofStats from "@/components/ProofStats";
import PainCards from "@/components/PainCards";
import OfferAudit from "@/components/OfferAudit";
import HowIWork from "@/components/HowIWork";
import Cases from "@/components/Cases";
import Mentorship from "@/components/Mentorship";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    initScrollTrack();
  }, []);

  return (
    <>
      <HeaderSticky />
      <main>
        <Hero />
        <ProofStats />
        <PainCards />
        <OfferAudit />
        <HowIWork />
        <Cases />
        <Mentorship />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
