import { useEffect, useRef, useState } from "react";
import TypingText from "../TypingText";

const AboutIntro = ({ sections }) => {
  const [activeImage, setActiveImage] = useState(sections?.[0]?.image);

  const sectionRefs = useRef([]);

  useEffect(() => {
    if (!sections?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveImage(sections[index].image);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="about-intro">
      {/* LEFT CONTENT */}
      <div className="about-intro__content">
        {sections.map((section, index) => (
          <div
            key={section.id || index}
            ref={(el) => {
              sectionRefs.current[index] = el;
              if (el) el.dataset.index = index;
            }}
            className="about-block"
          >
            {/* LABEL */}
            <div className="section-label">
              <span>{section.label}</span>
              {/* <div className="section-line" /> */}
            </div>

            {/* TITLE */}
            {index === 0 ? (
              <TypingText
                text={section.title}
                speed={75}
                className="about__title"
              />
            ) : (
              <h2 className="about__title">{section.title}</h2>
            )}

            {/* TEXT */}
            <p className="section-text" style={{ whiteSpace: "pre-line" }}>
              {section.text}
            </p>

            {section.extra && (
              <div className="section-text">
                <p>{section.extra}</p>
              </div>
            )}

            {/* MOBILE IMAGE */}
            <div className="about-block__mobile-image">
              <img src={section.image} alt={section.title} />
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP STICKY IMAGE */}
      <div className="about-intro__sticky">
        <img
          key={activeImage}
          src={activeImage}
          alt="About visual"
          className="about-intro__image"
        />
      </div>
    </section>
  );
};

export default AboutIntro;
