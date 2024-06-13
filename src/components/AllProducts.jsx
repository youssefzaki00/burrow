import { useContext } from "react";
import { ProductsContext } from "./../context/ProductsContext";
import ProductCard from "./ProductCard";
function AllProducts() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-32 mb-20 px-4 lg:px-12 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
