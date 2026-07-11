const features = [
  {
    number: "01",
    title: "Reliable Supply",
    text: "Our Production capacity allows us to support customers who require consistent access to Palm Kernel Cake ",

    image: "/zitelle/pk1.jpeg",
  },

  {
    number: "02",
    title: "Agricultural Value",
    text: "Palm Kernel Cake is widely used in livestock feed production and supports the agricultural supply chain.",

    image: "/zitelle/pk3.jpeg",
  },

  {
    number: "03",
    title: "Integrated Production",
    text: "As part of our palm kernel oil productions, our Palm Kernel Cake is produced through an organised and controlled process.",

    image: "/zitelle/pk2.jpeg",
  },
  {
    number: "04",
    title: "Resource Efficiency",
    text: "We maximise the value of raw materials by ensuring useful by-product are put practical use. ",

    image: "/zitelle/pk4.jpeg",
  },
  {
    number: "05",
    title: "Business Support",
    text: "We serve customers including farmers, feed producers, distributors and businesses within the agricultural sector ",

    image: "/zitelle/pk5.jpeg",
  },
];

const WhyPk = () => {
  return (
    <section className="why-standards">
      <div className="">
        <div className="business-pg__label">
          <div className="business-pg__label-line" />
          <span>WHY ZITELLE PALM KERNEL CAKE?</span>
          <div className="business-pg__label-line" />
        </div>
      </div>
      {features.map((item, index) => (
        <div
          key={index}
          className={`why-standards__row ${
            index % 2 !== 0 ? "why-standards__row--reverse" : ""
          }`}
        >
          {/* IMAGE */}

          <div className="why-standards__image-wrap">
            <img
              src={item.image}
              alt={item.title}
              className="why-standards__image"
            />
          </div>

          {/* CONTENT */}

          <div className="why-standards__content">
            <span className="why-standards__number">{item.number}</span>

            <h2 className="why-standards__title">{item.title}</h2>

            <p className="why-standards__text">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhyPk;
