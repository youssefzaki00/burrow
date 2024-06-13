import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "./ProductCard";

function ProductCategory({ category }) {
  const { fetchProductsByCategory, categoryProducts } =
    useContext(ProductsContext);
  useEffect(() => {
    fetchProductsByCategory(category);
  }, [category]);
  return (
    <div className="grid grid-cols-3 gap-6 mt-32 mb-20 px-12 ">
      {categoryProducts?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
}

export default ProductCategory;
