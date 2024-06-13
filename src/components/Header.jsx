import { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import cartIcon from "../assets/cart.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartModal from "./CartModal";
function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { categories } = useContext(CategoriesContext);
  const { cart } = useContext(CartContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex justify-between items-end fixed z-[4] bg-white w-full h-20 top-0 left-0 px-4 lg:px-12 shadow-sm pb-6">
      <button
        className=" block w-8 h-8 relative z-[41] lg:hidden"
        onClick={toggleMenu}
      >
        <img src={menu} alt="menu" />
      </button>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#383633]">
        <Link to="/">Momentum Solution</Link>
      </h1>
      <ul
        className={`${
          isMenuOpen
            ? "left-0 top-0 bg-white w-full h-screen z-40 pt-16"
            : "-left-60 top-0"
        } absolute lg:relative lg:left-0 flex-col flex lg:flex-row items-center gap-6 text-lg font-medium capitalize `}
      >
        <li className="cursor-pointer hover:text-gray-600  px-2">
          <Link to="AllProducts">All Products</Link>
        </li>
        {categories.map((category) => (
          <li
            onClick={toggleMenu}
            key={category}
            className="cursor-pointer hover:text-gray-600 px-2"
          >
            <Link to={category}>{category}</Link>
          </li>
        ))}
      </ul>
      <button className="relative" onClick={toggleCart}>
        <img src={cartIcon} className="w-8 h-8 " alt="cart" />
        <span
          className={`${
            cart?.length == 0 ? "hidden" : "block"
          } absolute -left-2 -top-2 bg-slate-600 text-white w-6 h-6 p-2 flex items-center justify-center rounded-full`}
        >
          {cart?.length}
        </span>
      </button>
      <CartModal isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
  );
}

export default Header;
