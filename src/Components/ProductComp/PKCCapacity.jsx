import Counter from "../Counter";

const capacities = [
  { label: "Daily", end: 180, duration: 2000, delay: 200, unit: "MT" },
  { label: "Weekly", end: 1260, duration: 2500, delay: 400, unit: "MT" },
  { label: "Monthly", end: 5400, duration: 3000, delay: 600, unit: "MT" },
  { label: "Yearly", end: 65700, duration: 4000, delay: 800, unit: "MT" },
];

const PKCCapacity = () => {
  return (
    <section className="pkcc">
      <div className="pkcc__inner">
        {/* LEFT — text */}
        <div className="pkcc__left">
          <p className="pkcc__label">Production Capacity</p>
          <h2 className="pkcc__title">
            Built To <span>Deliver At Scale</span>
          </h2>
          <p className="pkcc__text">
            Our palm kernel processing facility operates year-round, maintaining
            consistent output to meet the demands of farmers, feed producers,
            and distributors across Nigeria.
          </p>
        </div>

        {/* RIGHT — stats */}
        <div className="pkcc__right">
          {capacities.map((item, i) => (
            <div key={i} className="pkcc__row">
              <span className="pkcc__row-label">{item.label}</span>
              <strong className="pkcc__row-value">
                <Counter
                  end={item.end}
                  duration={item.duration}
                  delay={item.delay}
                />
                <span className="pkcc__row-unit">{item.unit}</span>
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PKCCapacity;
