import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Quality",
      description:
        "Batch after batch, order after order, our manufacturing process is held to the highest standards, ensuring every product that leaves our facility is safe, reliable and consistent.",
    },
    {
      title: "Innovation",
      description:
        "Continuously investing in production and technology to improve our products, streamline our processes, and stay ahead of market demands.",
    },
    {
      title: "Sustainability",
      description:
        "Operating with the future generation in mind. Responsible sourcing, reduced waste, and eco-conscious production practices that protect Nigeria's environment.",
    },
    {
      title: "Scale",
      description:
        "From a single order to a nationwide supply chain, our production facilities are built to grow with your business. No order too large, no partner too small.",
    },
    {
      title: "Impact",
      description:
        "Beyond business, we are committed to uplifting the communities where we operate – creating jobs, supporting local economies, and contributing to Nigeria's industrial development.",
    },
    {
      title: "Partnership",
      description:
        "We don't just sell products, we build relationships. Our team is dedicated to understanding your business and growing alongside you, for the long term.",
    },
  ];

  return (
    <section className="choose">
      {/* ───────── LEFT CONTENT ───────── */}
      <div className="choose__content">
        <div className="choose__label">
          <span>Why Choose Us</span>
          <div className="choose__line"></div>
        </div>

        <h2 className="choose__title">
          Where Industry Meets World Class Standard.
        </h2>

        <p className="choose__subtext">Built On Quality. Driven By Demand.</p>

        <p className="choose__text">
          Everything we do is held to one standard of excellence. From our
          manufacturing process to our delivery. We are committed to products
          and partnerships that stand the test of time.
        </p>
      </div>

      {/* ───────── CARD GRID ───────── */}
      <div className="choose__grid">
        {features.map((item, index) => (
          <div className="choose__card" key={index}>
            <span className="choose__card-num">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="choose__card-title">{item.title}</h3>
            <p className="choose__card-body">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
