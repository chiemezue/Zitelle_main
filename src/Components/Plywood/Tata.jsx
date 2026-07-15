import React, { useState } from "react";

const products = [
  {
    id: "hdf",
    name: "HDF",
    image: "/zitelle/HDF.png",
    description:
      "High Density Fibreboard in multiple finishes and surface treatments.",
    variants: ["Fresh Core", "Joint Core", "Melamined", "UV Gloss", "Embossed"],
    thicknesses: ["4mm", "9mm", "15mm", "18mm"],
    hasColors: true,
  },

  {
    id: "mdf",
    name: "MDF",
    image: "/zitelle/mdf.png",
    description:
      "Medium Density Fibreboard — versatile, smooth and easy to finish.",
    variants: ["Melamined", "UV Gloss", "Embossed"],
    thicknesses: ["4mm", "9mm", "15mm", "18mm"],
    hasColors: true,
  },

  {
    id: "marine",
    name: "Marine Plywood",
    image: "/zitelle/marine.png",
    description:
      "Moisture-resistant structural plywood for demanding applications.",
    variants: ["Fresh Core", "Joint Core"],
    thicknesses: ["15mm", "18mm"],
    hasColors: false,
  },

  {
    id: "semi-plastic",
    name: "Semi-Plastic Marine",
    image: "/zitelle/semi_plastic.png",
    description:
      "Green-faced semi-plastic marine board for heavy-duty applications.",
    variants: ["Green"],
    thicknesses: ["18mm"],
    hasColors: false,
  },

  {
    id: "commercial",
    name: "Commercial Plywood",
    image: "/zitelle/plywood_bg.png",
    description:
      "General-purpose plywood for furniture and construction projects.",
    variants: ["Brown"],
    thicknesses: ["4mm", "9mm", "15mm"],
    hasColors: false,
  },

  {
    id: "door-skin",
    name: "Door Skin",
    image: "/zitelle/door_skin.png",
    description:
      "Decorative door-facing panels available in multiple patterns.",
    variants: ["All Shapes"],
    thicknesses: ["Sizes TBC"],
    hasColors: false,
  },
];
const colorGroups = [
  {
    label: "Plain Colours",
    colors: [
      "White",
      "Off White",
      "Grey",
      "Dark Grey",
      "Cappuccino",
      "Pink",
      "Blue",
      "Orange",
      "Lemon",
    ],
  },

  {
    label: "Wood Colours",
    colors: [
      "Brown Mazonia",
      "White Mazonia",
      "Wenge",
      "Akala",
      "Customer Code",
      "Red Rose",
    ],
  },

  {
    label: "Special Colours",
    colors: ["Custom Order"],
  },
];

const Tata = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section className="products">
      <div className="products__header">
        <p className="products__label">PRODUCT RANGE</p>

        <h2 className="products__title">
          What We <span>Stock</span>
        </h2>

        <p className="products__subtitle">
          Explore our range of plywood, fibreboards, and decorative panel
          products available in different finishes and specifications.
        </p>
      </div>

      {/* PRODUCT GRID */}

      <div className="products__grid">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => setActiveProduct(product)}
            className={`products__card ${
              activeProduct.id === product.id ? "products__card--active" : ""
            }`}
          >
            <div className="products__card-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="products__card-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* DETAILS PANEL */}

      <div className="products__details">
        <div className="products__details-content">
          {/* PRODUCT */}

          <div className="products__section">
            <p className="products__details-label">PRODUCT</p>

            <h3>{activeProduct.name}</h3>

            <p className="products__details-text">
              {activeProduct.description}
            </p>
          </div>

          {/* FINISHES */}

          <div className="products__section">
            <p className="products__details-label">AVAILABLE FINISHES</p>

            <div className="products__chips">
              {activeProduct.variants.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          {/* THICKNESS */}

          <div className="products__section">
            <p className="products__details-label">AVAILABLE THICKNESSES</p>

            <div className="products__chips">
              {activeProduct.thicknesses.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          {/* COLOURS */}

          {activeProduct.hasColors && (
            <div className="products__section products__colors">
              <p className="products__details-label">AVAILABLE COLOURS</p>

              {colorGroups.map((group) => (
                <div key={group.label} className="products__color-group">
                  <h4>{group.label}</h4>

                  <div className="products__chips">
                    {group.colors.map((color) => (
                      <span key={color}>{color}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}

          <div className="products__cta">
            <button className="products__btn">Request A Quote →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tata;
