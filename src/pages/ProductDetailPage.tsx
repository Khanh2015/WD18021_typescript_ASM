import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailType, ProductType } from "../types/Product";
import ProductDetail from "../components/elements/ProductDetail";
import ProductSame from "../components/elements/ProductSame";
import { list, read } from "../api/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetailType | null>(null);

  const getProduct = async (_id: string) => {
    try {
      const [{ data: productDetail }, { data: relatedProducts }] =
        await Promise.all([read(_id), list()]);

      const renderRelatedProducts = relatedProducts.filter(
        (product: ProductType) =>
          product._id !== _id && product.category === productDetail.category
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
    getProduct(id);
  }, [id]);

  return (
    <>
      {product && <ProductDetail product={product} />}
      {product && <ProductSame product={product} />}
    </>
  );
};

export default ProductDetailPage;
