import React from "react";
import { Link } from "react-router-dom";
import { ProductDetailType, ProductType } from "../../types/Product";
import { formatVND } from "../../helper/utilities";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link
        to={`/products/${product.id}`}
        className="flex justify-center items-center"
      >
        <img
          className="p-8 rounded-t-lg md:h-[250px] lg:h-[350px] object-contain"
          src={product.image}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/products/${product.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </Link>
        <div className="flex items-center justify-between flex-col gap-y-5 mt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatVND(product.price)}
          </span>
          <Link
            to={`/products/${product.id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mt-5 lg:mt-0 w-[90%]"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
