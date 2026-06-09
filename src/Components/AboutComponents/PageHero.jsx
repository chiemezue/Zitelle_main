const PageHero = ({ title, highlight, subtitle, image, breadcrumb }) => {
  return (
    <section className="page-hero">
      {/* Background Image */}
      <img src={image} alt={title} className="page-hero__bg" />

      {/* Overlay */}
      <div className="page-hero__overlay" />

      {/* Content */}
      <div className="page-hero__content container">
        <h1 className="page-hero__title">
          {title} {highlight && <span className="hl-yellow">{highlight}</span>}
        </h1>

        {subtitle && <p className="page-hero__sub">{subtitle}</p>}

        {breadcrumb && (
          <div className="page-hero__breadcrumb">{breadcrumb}</div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
