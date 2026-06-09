import { useEffect, useRef } from "react";
import {
  BriefcaseBusiness,
  Package,
  Truck,
  ClipboardList,
  TrendingUp,
  Factory,
} from "lucide-react";

const careers = [
  {
    icon: <TrendingUp size={28} />,
    title: "Sales",
    text: "Where every Zitelle product begins",
  },

  {
    icon: <ClipboardList size={28} />,
    title: "Quality Control",
    text: "Ensuring consistent product standards",
  },

  {
    icon: <Truck size={28} />,
    title: "Logistics",
    text: "Moving products across Nigeria",
  },

  {
    icon: <Package size={28} />,
    title: "Packaging",
    text: "Protecting products with precision",
  },

  {
    icon: <BriefcaseBusiness size={28} />,
    title: "Administration",
    text: "Supporting daily operations efficiently",
  },

  {
    icon: <Factory size={28} />,
    title: "Production",
    text: "Powering manufacturing excellence",
  },
];

const CareerRoles = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    let animationFrame;

    const autoScroll = () => {
      if (!slider) return;

      slider.scrollLeft += 1;

      /* INFINITE LOOP */

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="career-roles">
      <div className="career-roles__track" ref={sliderRef}>
        {[...careers, ...careers].map((item, index) => (
          <div className="career-roles__card" key={index}>
            <div className="career-roles__icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerRoles;
