import React, { useMemo } from "react";

export const ShoppingCart = ({ cartItems, onRemove }) => {
  const total = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
      ),
    [cartItems],
  );

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <div>
          <p className="cart-title">Shopping Cart</p>
          <p className="cart-subtitle">Resumen de tus productos seleccionados</p>
        </div>
        <span className="cart-count">{cartItems.length} items</span>
      </div>

      {!cartItems.length ? (
        <div className="cart-empty">
          <p>Tu carrito está vacío.</p>
          <small>Agrega productos desde el catálogo para comenzar.</small>
        </div>
      ) : (
        <div className="cart-list">
          {cartItems.map((cartItem) => {
            const { product, quantity } = cartItem;
            return (
              <div className="cart-item" key={product.id}>
                <img
                  className="cart-item-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="cart-item-info">
                  <h4>{product.title}</h4>
                  <p>Precio unitario: ${product.price.toFixed(2)}</p>
                  <p>Cantidad: {quantity}</p>
                  <p className="cart-item-subtotal">
                    Subtotal: ${(product.price * quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => onRemove(product.id)}
                >
                  Eliminar
                </button>
              </div>
            );
          })}

          <div className="cart-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
};
