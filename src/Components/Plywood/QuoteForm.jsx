import { useEffect, useState } from "react";

const finishOptions = {
  HDF: [
    "White",
    "Off White",
    "Grey",
    "Dark Grey",
    "Cappuccino",
    "Pink",
    "Blue",
    "Orange",
    "Lemon",
    "Brown Mazonia",
    "White Mazonia",
    "Wenge",
    "Akala",
    "Customer Code",
    "Red Rose",
    "Custom Order",
  ],

  MDF: [
    "White",
    "Off White",
    "Grey",
    "Dark Grey",
    "Cappuccino",
    "Pink",
    "Blue",
    "Orange",
    "Lemon",
    "Brown Mazonia",
    "White Mazonia",
    "Wenge",
    "Akala",
    "Customer Code",
    "Red Rose",
    "Custom Order",
  ],

  "Marine Plywood": ["Fresh Core", "Joint Core"],

  "Semi-Plastic Marine": ["Green"],

  "Commercial Plywood": ["Brown"],

  "Door Skin": ["All Shapes"],
};

const QuoteForm = ({ selectedProduct }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    location: "",

    productType: "",
    thickness: "",
    finishColour: "",

    quantity: "",
    message: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productType: selectedProduct.product || "",
        thickness: selectedProduct.thickness || "",
        finishColour: selectedProduct.color || "",
      }));
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "productType") {
      setFormData((prev) => ({
        ...prev,
        productType: value,
        finishColour: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Quote request submitted successfully.");
  };

  const currentFinishes = finishOptions[formData.productType] || [];

  return (
    <section id="tatabobo-quote-form" className="quote-form">
      <div className="quote-form__container">
        <div className="quote-form__header">
          <span className="quote-form__label">Request A Quote</span>

          <h2 className="quote-form__title">Get Pricing & Availability</h2>

          <p className="quote-form__subtitle">
            Complete the form below and our sales team will contact you with
            pricing, stock availability and delivery information.
          </p>
        </div>

        <form className="quote-form__grid" onSubmit={handleSubmit}>
          {/* FULL NAME */}

          <div className="quote-form__field">
            <label>Full Name *</label>

            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* COMPANY */}

          <div className="quote-form__field">
            <label>Company Name</label>

            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          {/* PHONE */}

          <div className="quote-form__field">
            <label>Phone / WhatsApp *</label>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL */}

          <div className="quote-form__field">
            <label>Email *</label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* LOCATION */}

          <div className="quote-form__field">
            <label>Location (City / State)</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* PRODUCT */}

          <div className="quote-form__field">
            <label>Product Type</label>

            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
            >
              <option value="">Select Product</option>

              <option value="HDF">HDF</option>
              <option value="MDF">MDF</option>
              <option value="Marine Plywood">Marine Plywood</option>
              <option value="Semi-Plastic Marine">Semi-Plastic Marine</option>
              <option value="Commercial Plywood">Commercial Plywood</option>
              <option value="Door Skin">Door Skin</option>
            </select>
          </div>

          {/* THICKNESS */}

          <div className="quote-form__field">
            <label>Thickness (mm)</label>

            <select
              name="thickness"
              value={formData.thickness}
              onChange={handleChange}
            >
              <option value="">Select Thickness</option>

              <option value="4mm">4mm</option>
              <option value="9mm">9mm</option>
              <option value="15mm">15mm</option>
              <option value="18mm">18mm</option>
            </select>
          </div>

          {/* FINISH / COLOUR */}

          <div className="quote-form__field">
            <label>Finish / Colour</label>

            <select
              name="finishColour"
              value={formData.finishColour}
              onChange={handleChange}
            >
              <option value="">Select Finish / Colour</option>

              {currentFinishes.map((finish) => (
                <option key={finish} value={finish}>
                  {finish}
                </option>
              ))}
            </select>
          </div>

          {/* QUANTITY */}

          <div className="quote-form__field quote-form__field--full">
            <label>Quantity (Sheets)</label>

            <input
              type="number"
              min="1"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          {/* MESSAGE */}

          <div className="quote-form__field quote-form__field--full">
            <label>Message / Special Notes</label>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="quote-form__btn">
            Submit Quote Request →
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
