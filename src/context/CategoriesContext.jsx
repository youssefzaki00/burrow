import { useState, createContext, useEffect } from "react";

export const CategoriesContext = createContext();

// Create Categories Context Provider
const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCategories() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{ categories, setCategories, fetchCategories, loading, error }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesContextProvider;
