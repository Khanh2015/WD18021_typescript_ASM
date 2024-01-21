import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/elements/ProductCard";
import Slide from "../components/elements/Slide";
import { ProductDetailType } from "../types/Product";
import { list } from "../api/product";

const HomePage = () => {
  const [products, setProducts] = useState<ProductDetailType[]>([]);
  const getProduct = async () => {
    try {
      const { data: productList } = await list();
      productList && setProducts(productList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

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
