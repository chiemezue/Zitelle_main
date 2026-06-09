import { ShieldCheck, Users, Clock3 } from "lucide-react";
const cultureItems = [
  {
    icon: <ShieldCheck size={34} strokeWidth={1.8} />,
    title: "Responsibility",
    text: "Discipline and consistency drive everything we do across production, logistics, and operations.",
  },
  {
    icon: <Users size={34} strokeWidth={1.8} />,
    title: "Teamwork",
    text: "Dedicated teams across every division work together to uphold the standard behind the Zitelle name.",
  },
  {
    icon: <Clock3 size={34} strokeWidth={1.8} />,
    title: "Continuous Growth",
    text: "Through hands-on experience and real manufacturing exposure, every employee has room to grow.",
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
