# App de API

## Descripción general

Esta aplicación es un proyecto React creado con Vite. Consume productos desde la API pública `https://fakestoreapi.com` y los muestra en una grilla de tarjetas con estilo moderno.

El objetivo principal es presentar un catálogo de productos con:
- carga de datos remota usando `axios`
- estado de carga y manejo de errores
- componentes React reutilizables
- estilo responsive con CSS puro

---

## Estructura del proyecto

```
app-de-api/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.css
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── ProductCard.jsx
    │   └── ProductGrid.jsx
    ├── hooks/
    │   └── useProducts.js
    └── services/
        └── api.js
```

### Archivos principales

- `index.html`
  - Punto de entrada HTML que monta la aplicación en el elemento `<div id="root"></div>`.
  - Carga el archivo `src/main.jsx` como módulo.

- `package.json`
  - Define dependencias: `react`, `react-dom`, `axios`.
  - Define devDependencies: `vite`, `@vitejs/plugin-react`, `prettier`.
  - Scripts disponibles:
    - `npm run dev` — inicia el servidor de desarrollo de Vite.
    - `npm run build` — genera el build de producción.
    - `npm run preview` — muestra el build en modo preview.

- `vite.config.js`
  - Configura Vite con el plugin de React.
  - `base: "/app-de-api/"` define la ruta base requerida para despliegues en subcarpetas.

---

## Código fuente

### `src/main.jsx`

- Importa React y ReactDOM.
- Renderiza el componente `App` dentro de `#root`.
- Importa estilos globales desde `App.css`.

### `src/App.jsx`

- Componente principal de la app.
- Utiliza el hook personalizado `useProducts` para obtener:
  - `products`
  - `loading`
  - `error`
- Muestra:
  - un spinner mientras carga,
  - un mensaje de error si ocurre un fallo,
  - la grilla de productos cuando los datos están listos.

### `src/hooks/useProducts.js`

- Custom hook que encapsula la lógica de petición de datos.
- Usa `useState` para manejar `products`, `loading` y `error`.
- Usa `useEffect` para invocar `fetchProducts()` al montar el componente.
- Incluye protección contra actualizaciones en componentes desmontados mediante `isMounted`.

### `src/services/api.js`

- Define `BASE_URL` para la API de FakeStore.
- Exporta `fetchProducts()` como función asíncrona.
- Usa `axios.get()` para solicitar `/products`.
- Propaga errores hacia el hook padre para su manejo.

### `src/components/ProductGrid.jsx`

- Componente de presentación.
- Recibe `products` como prop y renderiza una lista de `ProductCard`.

### `src/components/ProductCard.jsx`

- Representa un producto individual.
- Muestra imagen, categoría, nombre y precio.
- Incluye un botón estilizado `Añadir al carrito`.

---

## Estilos y experiencia de usuario

- `src/App.css` contiene los estilos de toda la aplicación.
- Incluye:
  - grilla responsive con `grid`.
  - tarjetas con hover y sombras.
  - spinner para el estado de carga.
  - botón animado con efecto marquee al pasar el cursor.
- Los colores usan variables CSS para mantener consistencia.

---

## Cómo ejecutar el proyecto

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir la URL que muestra Vite en el navegador.

---

## Recomendaciones de mejora

- Agregar manejo de carrito real y estado global si se desea conservar productos seleccionados.
- Añadir paginación o filtros por categoría para mejorar usabilidad.
- Extraer el botón animado a un componente propio si se reutiliza en otros lugares.
- Incluir pruebas unitarias con `vitest` o `React Testing Library`.

---

## Observaciones finales

Esta app está organizada en una arquitectura simple y adecuada para una SPA pequeña:
- `src/services` para API
- `src/hooks` para lógica de datos
- `src/components` para UI

Si deseas, puedo también añadir documentación inline dentro de cada archivo fuente o generar un conjunto de comentarios más detallado en el código.
