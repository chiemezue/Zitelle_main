import { Link } from "react-router-dom";

const ProductHero = ({
  label,
  title,
  text,
  image,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
}) => {
  return (
    <section className="product-hero">
      {/* LEFT */}

      <div className="product-hero__content">
        <div className="product-hero__label">
          <span>{label}</span>

          <div className="product-hero__line"></div>
        </div>

        <h2 className="product-hero__title">{title}</h2>

        <p className="product-hero__text">{text}</p>

        <div className="product-hero__actions">
          <Link to={primaryLink} className="product-hero__btn">
            {primaryText}
            <span>→</span>
          </Link>

          <Link to={secondaryLink} className="product-hero__secondary-btn">
            {secondaryText}
          </Link>
        </div>
      </div>

      {/* RIGHT */}

      <div className="product-hero__image-wrap">
        <img src={image} alt={title} className="product-hero__image" />
      </div>
    </section>
  );
};

export default ProductHero;
