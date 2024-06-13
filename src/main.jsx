import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductsContextProvider from "./context/ProductsContext.jsx";
import CategoriesContextProvider from "./context/CategoriesContext.jsx";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <CategoriesContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
