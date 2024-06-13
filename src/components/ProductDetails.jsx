import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const params = useParams();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  useEffect(() => {
    const temp = products?.find((e) => e?.title === params?.title);
    setProduct(temp);
  }, [products, params?.title]);
  return (
    <div className="grid lg:grid-cols-5 gap-8 mb-20 mt-32 px-4 lg:px-12 text-left text-[#413f3c]">
      <div className="rounded col-span-3 h-full shadow-sm bg-gray-200 p-4 flex items-center justify-center">
        <img
          className="object-contain h-full w-full"
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <div className="col-span-2">
        <h1 className="text-3xl  font-semibold mb-4">{product?.title}</h1>
        <p className="font-semibold text-xl">${product?.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-yellow-300 text-black text-center p-4 px-8 my-4 font-semibold text-lg rounded shadow active:shadow-inner"
        >
          Add To Cart
        </button>
        <p>{product?.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
