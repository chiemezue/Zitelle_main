import React from "react";
import DarkReusableSection from "../DarkReusableSection";

const AboutCommit = () => {
  return (
    <>
      <DarkReusableSection
        label="Our Commitment"
        title="Our Commitment to Excellence"
        text="Zitelle Group is committed to:"
        // buttonLink="/careers"
        // buttonText="Careers"
        image="/zitelle pictures/machine4.jpg"
        items={[
          "Quality — We work to maintain dependable standards across our products and production processes.",
          "Reliability — We understand that customers, distributors, and businesses depend on consistent supply.",
          "Local Manufacturing — We believe in the importance of building industrial capability within Nigeria.",
          "Practical Innovation — We continue to improve our processes, products, and systems to better serve customer needs.",
          "Customer Trust — We aim to build long-term relationships by delivering products that people and businesses can depend on.",
        ]}
      />
    </>
  );
};

export default AboutCommit;
