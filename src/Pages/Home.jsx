import React from "react";
import Hero from "../Components/HomeComponents/Hero";
import AboutSection from "../Components/AboutComponents/AboutSection";
import BusinessSection from "../Components/HomeComponents/BusinessSection";
import WhyChooseUs from "../Components/HomeComponents/WhyChooseUs";
import CareerSection from "../Components/HomeComponents/CareerSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <BusinessSection />
      <WhyChooseUs />
      <CareerSection />
    </>
  );
};

export default Home;
