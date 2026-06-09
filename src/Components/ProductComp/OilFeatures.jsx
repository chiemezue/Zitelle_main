import {
  HeartPulse,
  Leaf,
  ShieldPlus,
  Palette,
  ShieldCheck,
  Wind,
  Repeat,
  Trees,
} from "lucide-react";

const features = [
  {
    icon: HeartPulse,
    title: "No Cholesterol",
    desc: "100% cholesterol-free for a healthier lifestyle",
  },

  {
    icon: Leaf,
    title: "No Animal Fats",
    desc: "Entirely plant-based, free of animal derivatives",
  },

  {
    icon: ShieldPlus,
    title: "Fortified with Vitamin A",
    desc: "Enriched to support vision and immune health",
  },

  {
    icon: Palette,
    title: "No Artificial Colouring",
    desc: "Pure natural hue with no dyes or synthetic tints",
  },

  {
    icon: ShieldCheck,
    title: "No Preservatives",
    desc: "Clean formulation with no added preservatives",
  },

  {
    icon: Wind,
    title: "Light & Odourless",
    desc: "Neutral taste and scent suitable for multiple applications",
  },

  {
    icon: Repeat,
    title: "Suitable For All Usage",
    desc: "Versatile across food, cosmetic and industrial applications",
  },

  {
    icon: Trees,
    title: "Palm Kernel Extracted",
    desc: "Scientifically extracted from premium palm kernel nuts",
  },
];

const OilFeatures = () => {
  return (
    <section className="oil-features">
      <div className="oil-features__heading">
        <span>PRODUCT ADVANTAGES</span>
        <h2>Why Choose Our Palm Kernel Oil</h2>
      </div>
      <div className="oil-features__grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div className="oil-features__card" key={index}>
              <span className="oil-features__line"></span>

              <div className="oil-features__icon">
                <Icon size={34} strokeWidth={1.8} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OilFeatures;
