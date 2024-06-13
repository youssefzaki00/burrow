import { useState, createContext, useEffect } from "react";

// Create Products Context
export const ProductsContext = createContext();

// Create Products Context Provider
const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  async function fetchProductsByCategory(category) {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setCategoryProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categoryProducts,
        setCategoryProducts,
        fetchProducts,
        fetchProductsByCategory,
        loading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
