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
      <div className="business-pg__top">
        <div className="business-pg__label">
          <div className="business-pg__label-line" />
          <span>Our Businesses</span>
          <div className="business-pg__label-line" />
        </div>
        <h2 className="business-pg__heading">
          Four industries. One Standard
          <br />
          Built on reliability, quality assurance, and the
          <br />
          capacity to deliver at scale.
        </h2>
        {/* <p className="business-pg__subtext">
          Select a business unit to explore what we do.
        </p> */}
      </div>
      {/* <div className="business-section__top">
        <div className="business-section__heading">
         
          <span className="business-section__static">Our Businesses</span>
          <VerticalTextSlider
            staticText=""
            words={["Soap", "Cooking Oil", "Plywood", "Plastic"]}
          />
        </div>
        <div className="business-pg__label">
          <div className="business-pg__label-line" />
          <span>Our Businesses</span>
          <div className="business-pg__label-line" />
        </div>
        <p className="business-section__text">
          Four industries. One standard. We manufacture and supply essential
          products that serve homes, retailers, and businesses across Nigeria.
          Built on reliability, quality assurance, and the capacity to deliver
          at scale.
        </p>
      </div> */}

      <div className="business-pg__grid">
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
