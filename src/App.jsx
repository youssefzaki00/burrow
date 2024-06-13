import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCategory from "./components/ProductCategory";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<AllProducts />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route
          path="/electronics"
          element={<ProductCategory category={"electronics"} />}
        />
        <Route
          path="/jewelery"
          element={<ProductCategory category={"jewelery"} />}
        />
        <Route
          path="/women's clothing"
          element={<ProductCategory category={"women's clothing"} />}
        />
        <Route
          path="/men's clothing"
          element={<ProductCategory category={"men's clothing"} />}
        />
        <Route path="/:category/:title" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
