import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="">
      <Link
        to={`/${encodeURIComponent(product.category)}/${encodeURIComponent(
          product.title
        )}`}
        className="group bg-gray-100 rounded p-4 flex justify-center items-center shadow-sm cursor-pointer relative"
      >
        <img
          src={product?.image}
          alt={product?.title}
          className="w-20 h-20 object-contain"
        />
        <button
          onClick={() => addToCart(product)}
          type="button"
          className="bg-gray-700 text-white absolute bottom-0 left-0 w-full p-2 hidden group-hover:block z-10"
        >
          Add To Cart
        </button>
      </Link>
      <div className="text-left mt-2 text-sm">
        <h3>{product?.title}</h3>
        <h4 className=" text-gray-700">${product?.price}</h4>
      </div>
    </div>
  );
}

export default ProductCard;
