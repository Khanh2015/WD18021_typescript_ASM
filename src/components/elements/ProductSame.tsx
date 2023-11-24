import { ProductDetailType } from "../../types/Product";
import ProductCard from "./ProductCard";

type ProductSameProps = {
  product: ProductDetailType;
};
const ProductSame: React.FC<ProductSameProps> = ({ product }) => {
  console.log(product);

  return (
    <>
      <h1 className="mx-20 text-3xl font-bold">Same category products</h1>
      <div className="grid grid-cols-4 gap-5 mx-20 my-10">
        {product.productListRelated.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductSame;
