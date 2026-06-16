import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid = ({
  products,
  favorites,
  onToggleFavorite,
  onAddToCart,
}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
