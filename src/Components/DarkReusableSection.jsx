import { Link } from "react-router-dom";
import TypingText from "./TypingText";

const DarkReusableSection = ({
  label,
  title,
  text,
  buttonText,
  image,
  buttonLink,
  overlay = true,
  items = [],
}) => {
  return (
    <section className="career">
      {/* BACKGROUND IMAGE */}

      <div className="career__bg">
        <img src={image} alt={title} className="object-cover" />
      </div>

      {/* DARK OVERLAY */}

      {overlay && <div className="career__overlay"></div>}

      {/* CONTENT */}

      <div className="career__content">
        {/* LEFT */}

        <div className="career__left">
          <div className="career__label">
            <span>{label}</span>

            <div className="career__line"></div>
          </div>

          <TypingText text={title} speed={75} className="career__title" />

          {buttonText && buttonLink && (
            <Link to={buttonLink} className="about__btn">
              {buttonText}

              <span>→</span>
            </Link>
          )}
        </div>

        {/* RIGHT */}

        <div className="career__right">
          <p className="career__text">{text}</p>

          {items.length > 0 && (
            <ul className="career__list">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default DarkReusableSection;
