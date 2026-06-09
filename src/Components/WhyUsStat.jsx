const stats = [
  {
    number: "10+",
    text: "Trusted by customers for over a decade",
  },

  {
    number: "7 days",
    text: "Operating seven days a week without compromise or interruption",
  },

  {
    number: "4",
    text: "Four divisions serving homes, businesses and industries",
  },
];

const WhyUsStat = () => {
  return (
    <section className="why-us">
      {/* TOP */}

      <div className="why-us__top">
        <div className="why-us__label">
          <span>Our Standard</span>

          <div className="why-us__line" />
        </div>
        {/* <div className="section-label">
          <span>Our Standard</span>

          <div className="section-line" />
        </div> */}

        <h2 className="why-us__title">Built Around What Customers Trust.</h2>

        <p className="why-us__text">
          From edible oils and multipurpose soap to plastic packaging and wood
          importation, our work is built around quality, consistency, and
          dependable supply.
        </p>
      </div>

      {/* STATS */}

      <div className="why-us__stats">
        {stats.map((item, index) => (
          <div className="why-us__card" key={index}>
            <h3>{item.number}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsStat;
