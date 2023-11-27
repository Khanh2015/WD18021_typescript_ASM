import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailType } from "../types/Product";
import axios from "axios";
import ProductDetail from "../components/elements/ProductDetail";
import ProductSame from "../components/elements/ProductSame";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetailType | null>(null);

  const getProduct = async (id: number) => {
    try {
      const [{ data: productDetail }, { data: relatedProducts }] =
        await Promise.all([
          axios.get("http://localhost:3000/products/" + id),
          axios.get("http://localhost:3000/products"),
        ]);

      const renderRelatedProducts = relatedProducts.filter(
        (product: ProductDetailType) =>
          product.id !== id && product.category === productDetail.category
      );

      setProduct({
        ...productDetail,
        relatedProducts: renderRelatedProducts,
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

  return (
    <>
      {product && <ProductDetail product={product} />}
      {product && <ProductSame product={product} />}
    </>
  );
};

export default ProductDetailPage;
