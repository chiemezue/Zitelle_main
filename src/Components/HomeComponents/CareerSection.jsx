import DarkReusableSection from "../DarkReusableSection";

const CareerSection = () => {
  return (
    <DarkReusableSection
      label="Career"
      title="Build A Future With Us"
      text="At Zitelle Group, we believe our people are our greatest strength. We’re building a dynamic, inclusive workplace where talent is developed, ideas are respected, and hard work is recognised. Here, you’re supported to learn, grow, and build a meaningful career for the long term while contributing to products and services that make a real impact every day."
      buttonLink="/careers"
      buttonText="Careers"
      image="/zitelle pictures/machine4.jpg"
      items={[
        "Career Growth Opportunities within Zitelle Group",
        "Continuous Learning & On-the-Job Development",
        "Collaborative and Team-Oriented Work Environment",
        "Competitive and Fair Compensation Structure",
        "Safety-First Manufacturing Culture",
      ]}
    />
  );
};

export default CareerSection;
