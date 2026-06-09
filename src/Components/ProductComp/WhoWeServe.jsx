const WhoWeServe = ({ label, title, image, items }) => {
  return (
    <section className="who-serve">
      <div className="who-serve__content">
        {/* LABEL */}

        <div className="who-serve__label">
          <span>{label}</span>

          <div className="who-serve__line"></div>
        </div>

        {/* TITLE */}

        <h2 className="who-serve__title">{title}</h2>

        {/* LIST */}

        <div className="who-serve__list">
          {items.map((item, index) => (
            <div key={index} className="who-serve__item">
              <div className="who-serve__icon">{item.icon}</div>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE */}

      <div className="who-serve__image-wrap">
        <img src={image} alt={title} className="who-serve__image" />
      </div>
    </section>
  );
};

export default WhoWeServe;
