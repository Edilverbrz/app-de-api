import React, { useEffect, useMemo, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { ProductGrid } from "./components/ProductGrid";
import { ShoppingCart } from "./components/ShoppingCart";
import {
  getCart,
  getFavorites,
  saveCart,
  saveFavorites,
} from "./services/storage";
import "./App.css";

function App() {
  const { products, loading, error } = useProducts();
  const [favorites, setFavorites] = useState(() => getFavorites());
  const [cart, setCart] = useState(() => getCart());

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const toggleFavorite = (productId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(productId)
        ? currentFavorites.filter((id) => id !== productId)
        : [...currentFavorites, productId],
    );
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.product.id !== productId),
    );
  };

  const cartItemCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () =>
      cart
        .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
        .toFixed(2),
    [cart],
  );

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="brand">
          <h1>FakeStore Marketplace</h1>
          <p className="brand-description">
            Catálogo de productos con favoritos y carrito persistente.
          </p>
        </div>

        <div className="header-summary">
          <span className="header-pill">❤️ Favorites: {favorites.length}</span>
          <span className="header-pill">
            🛒 Cart: {cartItemCount} items - ${cartTotal}
          </span>
        </div>
      </header>

      <main className="main-content">
        <div className="content-layout">
          <section className="products-panel">
            {loading && (
              <div className="loading-container">
                <div className="spinner"></div>
                <p>Cargando catálogo...</p>
              </div>
            )}

            {error && (
              <div className="error-container">
                <p>⚠️ Hubo un problema: {error}</p>
              </div>
            )}

            {!loading && !error && (
              <ProductGrid
                products={products}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onAddToCart={addToCart}
              />
            )}
          </section>

          <aside className="cart-panel">
            <ShoppingCart cartItems={cart} onRemove={removeFromCart} />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
