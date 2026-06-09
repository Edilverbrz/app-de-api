import React from "react";
import { useProducts } from "./hooks/useProducts";
import { ProductGrid } from "./components/ProductGrid";
import "./App.css"; // <--- ¡Asegúrate de que esta línea exista exactamente así!

function App() {
  const { products, loading, error } = useProducts();

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>FakeStore Marketplace</h1>
      </header>

      <main className="main-content">
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

        {!loading && !error && <ProductGrid products={products} />}
      </main>
    </div>
  );
}

export default App;
