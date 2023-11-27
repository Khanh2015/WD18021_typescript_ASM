// type ProductRate = {
//   rate: number;
//   count: number;
// };

// export type Product = {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   category: string;
//   price: number;
//   rating: ProductRate;
// };

// export type ProductDetailType = Product & {
//   productListRelated: Product[];
// };
export type ProductType = {
  id: number;
  category: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type ProductDetailType = ProductType & {
  relatedProducts: ProductType[];
};
