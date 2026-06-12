import React from "react";
import VerticalTextSlider from "../VerticalTextSlider";
import { Link } from "react-router-dom";

const BusinessSection = () => {
  const businesses = [
    {
      title: "Soap",
      description:
        "Zitelle Soap is a versatile multipurpose soap made for everyday cleaning needs. Strong enough for laundry and practical washing, yet suitable for personal bathing use",
      image: "/zitelle/soap1.jpg",
      link: "/services/soap",
    },

    {
      title: "Plywood",
      description:
        "Our plywood is responsibly sourced and imported from China. We work with consistent specifications and clear order handling to support customers who need dependable availability and predictable supply.  ",
      image: "/zitelle/plywood5.jpg",
      link: "/services/plywood",
    },

    {
      title: "Plastic",
      description:
        "Modern packaging systems designed to preserve product quality and support distribution needs.",
      image: "/zitelle/plastic.jpg",
      link: "/services/packaging",
    },

    {
      title: "Oil",
      description:
        "Our refined palm Kernel Oil is processed to meet the needs of businesses that require a reliable, versatile, and consistent oil for manufacturing and commercial use.",
      image: "/zitelle/oil1.jpg",
      link: "/services/cooking-oil",
    },
  ];

  return (
    <section className="business">
      <div className="section-top">
        <div className="section-label">
          <span>Our Businesses</span>
          <div className="section-line"></div>
        </div>

        <h2 className="about__title">
          <VerticalTextSlider
            staticText="We Manufacture"
            words={["Soap", "Cooking Oil", "Plywood", "Packaging"]}
          />
        </h2>

        <p className="section-text">
          Four industries. One standard. We manufacture and supply essential
          products that serve homes, retailers, and businesses across Nigeria.
          Built on reliability, quality assurance, and the capacity to deliver
          at scale.
        </p>
      </div>

      <div className="business__grid">
        {businesses.map((item, index) => (
          <div className="business__card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="business__image"
            />
            <div className="business__overlay">
              <div className="business__overlay-content">
                <h3>{item.title}</h3>
                <div className="business__divider" />
                <p>{item.description}</p>
              </div>
              <Link to={item.link} className="business__read-more">
                <span>READ MORE</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
