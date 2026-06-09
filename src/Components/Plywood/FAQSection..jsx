import { useState } from "react";

const faqs = [
  {
    question: "What items are included in the next stock?",
    answer:
      "We can share confirmed incoming options by type, thickness and finish/colour. Send your requirements and we will advise accordingly.",
  },

  {
    question: "When are you expecting the next stock?",
    answer:
      "Stock timelines vary by product type. Be rest assured that your desired product will be available as we aim to satisfy all orders in a timely manner. Contact sales with what you need and we will confirm availability.",
  },

  {
    question: "Can you offer better pricing for bulk orders?",
    answer:
      "Yes. Pricing is quote-based and may improve depending on volume and product selection.",
  },

  {
    question: "Where will we load from?",
    answer:
      "Loading takes place at our designated warehouse. Location and loading instructions are shared after order confirmation.",
  },

  {
    question: "I had damage in my last order, what should I do?",
    answer:
      "Contact us immediately with photos and your invoice details. We will review and resolve in line with our internal process.",
  },

  {
    question: "Do you have a loyalty programme?",
    answer:
      "Not at this time. We appreciate repeat customers and may recognise customer support at year-end based on annual purchase volume, measured against an internal benchmark.",
  },

  {
    question: "Do you stock plain colours and wood-grain finishes for MDF/HDF?",
    answer:
      "Yes. Availability varies by stock cycle. Share your preferred colour, finish and thickness for confirmation.",
  },

  {
    question: "What sheet sizes do you supply?",
    answer:
      "Sheet sizes vary by product type and stock. Contact sales for current available sheet sizes.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        {/* HEADER */}

        <div className="faq__header">
          <span className="faq__label">Frequently Asked Questions</span>

          <h2 className="faq__title">
            Everything You Need To <span>Know</span>
          </h2>

          <p className="faq__subtitle">
            Answers to common questions about stock availability, pricing,
            loading, specifications and customer support.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${
                activeIndex === index ? "faq__item--active" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>

                <span
                  className={`faq__icon ${
                    activeIndex === index ? "faq__icon--active" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`faq__answer-wrapper ${
                  activeIndex === index ? "faq__answer-wrapper--open" : ""
                }`}
              >
                <div className="faq__answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
