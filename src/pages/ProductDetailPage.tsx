import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, ProductDetailType } from "../types/Product";
import axios from "axios";
import ProductDetail from "../components/elements/ProductDetail";
import ProductSame from "../components/elements/ProductSame";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetailType | null>(null);

  const getProduct = async (id: number) => {
    try {
      const { data: product } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const { data: sameProducts } = await axios.get(
        "https://fakestoreapi.com/products/category/" + product.category
      );

      const relatedProducts = sameProducts.filter(
        (item: Product) => item.id !== +id
      );
      setProduct({
        ...product,
        productListRelated: relatedProducts,
      });
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!id) return;
    getProduct(Number(id));
  }, [id]);
  ``;
  return (
    <>
      {product && <ProductDetail product={product} />}
      {product && <ProductSame product={product} />}
    </>
  );
};

export default ProductDetailPage;
