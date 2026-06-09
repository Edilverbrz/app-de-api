import React from "react";

export const ProductCard = ({ product }) => {
  const { title, price, image, category } = product;

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="card-body">
        <span className="category">{category}</span>
        <h3 className="title" title={title}>
          {title}
        </h3>
        <p className="price">${price.toFixed(2)}</p>

        {/* 🌟 REEMPLAZA TU BOTÓN ANTERIOR POR ESTE NUEVO BLOQUE 🌟 */}
        <button className="btn-23">
          <span className="text">Carrito</span>
          <span aria-hidden="true" className="marquee">
            Carrito
          </span>
        </button>
        {/* ------------------------------------------------------ */}
      </div>
    </div>
  );
};
