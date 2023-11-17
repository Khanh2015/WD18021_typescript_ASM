import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/elements/ProductCard";
import { Product } from "../types/Product";
import Slide from "../components/elements/Slide";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getProduct = async () => {
    const { data: productList } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    setProducts(productList);
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(products);

  return (
    <>
      <Slide />
      <div className="product-container my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-10 mx-[100px] gap-y-8">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
