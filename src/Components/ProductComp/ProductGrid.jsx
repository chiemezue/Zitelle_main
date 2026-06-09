import { Link } from "react-router-dom";

const ProductGrid = ({ label, title, products }) => {
  return (
    <section className="product-grid">
      {/* HEADER */}

      <div className="product-grid__header">
        <div className="product-grid__label">
          <span>{label}</span>

          <div className="product-grid__line"></div>
        </div>

        <h2 className="product-grid__title">{title}</h2>
      </div>

      {/* PRODUCTS */}

      <div className="product-grid__wrapper">
        {products.map((product) => (
          <Link to={product.link} key={product.id} className="product-card">
            <div className="product-card__image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="product-card__image"
              />
            </div>

            <div className="product-card__content">
              <span className="product-card__category">{product.category}</span>

              <h3 className="product-card__name">{product.name}</h3>

              <p className="product-card__desc">{product.description}</p>

              {product.price && (
                <h4 className="product-card__price">{product.price}</h4>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
