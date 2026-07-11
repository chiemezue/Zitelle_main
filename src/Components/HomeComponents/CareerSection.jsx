import DarkReusableSection from "../DarkReusableSection";

const CareerSection = () => {
  return (
    <DarkReusableSection
      label=""
      title="BUILD YOUR FUTURE WITH ZITELLE"
      text="At Zitelle, every product begins with its people – the hands that build, the minds that improve, and the teams that keep us moving every day. Behind every process, every product, and every delivery is a shared commitment to quality, discipline, and continuous improvement."
      buttonLink="/careers"
      buttonText="Careers"
      image="/zitelle/IMG_8260.png"
      items={[
        "Discipline & Accountability",
        "Teamwork & Respect",
        "Quality Mindset",
        "Continuous Improvement",
        "Safety & Responsibility",
      ]}
    />
  );
};

export default CareerSection;
