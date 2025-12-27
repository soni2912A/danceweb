import React from "react";
import TickerBar from "../../components/Middle-section/TickerBar";
import VisionSection from "../../components/Middle-section/VisionSection";
import ClassesSection from "../../components/Middle-section/ClassesSection";
import FoundersSection from "../../components/Middle-section/FoundersSection";
import CTASection from "../../components/Middle-section/CTASection";
import Hero from "../../components/Hero-section/hero";

const Home = () => {
  return (
    <>
   
      <Hero />
      <TickerBar />
      <VisionSection />
      <ClassesSection />
      <FoundersSection />
      <CTASection />
      

    </>
  );
};

export default Home;
