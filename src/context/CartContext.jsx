import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  function addToCart(product) {
    setCart([...cart, product]);
  }
  function removeFromCart(product) {
    if (product) {
      const filtered = cart.filter((e) => e.id != product.id);
      setCart(filtered);
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
