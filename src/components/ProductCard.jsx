import React from "react";

export const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}) => {
  const { id, title, price, image, category } = product;

  return (
    <article className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="card-body">
        <span className="category">{category}</span>
        <h3 className="title" title={title}>
          {title}
        </h3>
        <p className="price">${price.toFixed(2)}</p>

        <div className="card-actions">
          <button
            type="button"
            className={`favorite-button ${isFavorite ? "active" : ""}`}
            onClick={() => onToggleFavorite(id)}
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {isFavorite ? "★" : "☆"} Favorito
          </button>

          <button
            type="button"
            className="btn-23 add-to-cart"
            onClick={() => onAddToCart(product)}
          >
            <span className="text">Añadir al carrito</span>
            <span aria-hidden="true" className="marquee">
              Añadir al carrito
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
