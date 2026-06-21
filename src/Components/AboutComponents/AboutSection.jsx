import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TypingText from "../TypingText";

const AboutSection = () => {
  const images = ["/zitelle/who_we_are.jpeg"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <section className="about-section">
      {/* LEFT CONTENT */}

      <div className="about-section__content">
        <div className="section-label">
          <span>WHO WE ARE</span>
          <div className="section-line" />
        </div>

        <TypingText
          text="DRIVING GROWTH ACROSS INDUSTRIES, COMMUNITIES AND EVERYDAY LIFE."
          speed={75}
          className="about__title"
        />

        <p className="about-section__text">
          Zitelle Group is a Nigerian manufacturing group with a growing
          presence across essential industries. For over a decade, we have built
          our business through disciplined production, continuous improvement,
          and a commitment to quality across edible oils, multipurpose soap,
          plastic packaging, and wood products.
        </p>

        <p className="about-section__text">
          Our integrated operations allow us to create value beyond
          manufacturing—supporting households, businesses, distributors, local
          enterprise, and the communities we serve.
        </p>

        <button className="about-section__btn">
          <Link to="/about">
            Learn More <span>→</span>
          </Link>
        </button>
      </div>

      {/* RIGHT IMAGE */}

      <div className="about-section__image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="About"
            className={`about-section__image ${
              index === currentImage
                ? "about-section__image--active"
                : "about-section__image--hidden"
            }`}
          />
        ))}

        <div className="about-section__image-overlay"></div>
      </div>
    </section>
  );
};

export default AboutSection;
