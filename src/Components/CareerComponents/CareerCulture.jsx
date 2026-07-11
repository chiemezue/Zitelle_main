import {
  ShieldCheck,
  Users,
  BadgeCheck,
  TrendingUp,
  HardHat,
  Lightbulb,
} from "lucide-react";

const cultureItems = [
  {
    icon: <ShieldCheck size={34} strokeWidth={1.8} />,
    title: "Discipline & Accountability",
    text: "We take ownership of our responsibilities and maintain the consistency needed to deliver dependable results every day.",
  },
  {
    icon: <Users size={34} strokeWidth={1.8} />,
    title: "Teamwork & Respect",
    text: "Collaboration, mutual respect, and shared goals help us work effectively across departments and divisions.",
  },
  {
    icon: <BadgeCheck size={34} strokeWidth={1.8} />,
    title: "Quality Mindset",
    text: "We focus on doing things right, maintaining standards, and continuously improving the quality of our products and processes.",
  },
  {
    icon: <TrendingUp size={34} strokeWidth={1.8} />,
    title: "Continuous Improvement",
    text: "We encourage learning, innovation, and practical problem-solving to help both our people and our business grow.",
  },
  {
    icon: <HardHat size={34} strokeWidth={1.8} />,
    title: "Safety & Responsibility",
    text: "Creating a safe, responsible, and productive working environment is a priority across all our operations.",
  },
  {
    icon: <Lightbulb size={34} strokeWidth={1.8} />,
    title: "Ownership Culture",
    text: "We encourage every team member to think beyond their role, take initiative, solve problems, and treat the company’s progress as a shared responsibility.",
  },
];

const CareerCulture = () => {
  return (
    <section className="career-culture ">
      <div className="career-culture__top">
        <h2 className="career-culture__title">
          Built on Responsibility <br /> and Teamwork
        </h2>
        <p className="career-culture__text">
          Working at Zitelle means being part of a practical, fast-moving
          manufacturing environment where what you do every day matters.
        </p>
      </div>

      <div className="career-culture__grid">
        {cultureItems.map((item, index) => (
          <div className="career-culture__card" key={index}>
            <div className="career-culture__icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerCulture;
