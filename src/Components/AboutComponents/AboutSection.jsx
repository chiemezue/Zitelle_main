import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TypingText from "../TypingText";

const AboutSection = () => {
  /* ───────── IMAGES ───────── */

  const images = [
    "/zitelle/about1.jpg",

    "/zitelle/about2.jpg",

    "/zitelle/about3.jpg",

    "/zitelle/about4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  /* ───────── IMAGE FADE SLIDER ───────── */

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(slider);
  }, [images.length]);

  return (
    <section className="about">
      {/* ───────── LEFT CONTENT ───────── */}

      <div className="about__content">
        <div className="section-label">
          <span>WE PRODUCE </span>
        </div>

        {/* ───────── REUSABLE TYPING COMPONENT ───────── */}

        <TypingText
          text="Quality You Can Trust, From Our Heart to Your Home. "
          speed={75}
          className="about__title"
        />

        <p className="about__text">
          Zitelle Group is behind the essentials that keep life moving – made
          with care, produced to standard, and supplied with consistency across
          Nigeria. From manufacturing to packaging and dependable delivery, we
          sweat the details so you don’t have to.
        </p>

        <p className="about__text">
          Whether it’s for your household or your business, you can count on
          quality that shows up the same way every time. From our hearts to your
          home, we deliver trust in every product.
        </p>

        <button className="about__btn">
          <Link to={"/about"}>
            Learn More
            <span>→</span>
          </Link>
        </button>
      </div>

      {/* ───────── RIGHT IMAGE FADE SLIDER ───────── */}

      <div className="about__image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="About"
            className={`about__image ${
              index === currentImage
                ? "about__image--active"
                : "about__image--hidden"
            }`}
          />
        ))}

        <div className="about__image-overlay"></div>
      </div>
    </section>
  );
};

export default AboutSection;
