import { useEffect, useState } from "react";
import { ProductDetailType } from "../types/Product";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatVND } from "../helper/utilities";

type Props = {};

const ManagerProduct = (props: Props) => {
  const [products, setProducts] = useState<ProductDetailType[] | null>(null);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      data && setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!id) return;
    try {
      const check = confirm("Bạn có muốn xóa không?");
      if (check) {
        await axios.delete("http://localhost:3000/products/" + id);
        if (products) {
          const newProducts = products.filter((product) => product.id !== id);
          setProducts(newProducts);
          alert("Xóa thành công!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => {
              return (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 max-w-[150px] text-black font-bold">
                    {product.name}
                  </td>
                  <td className="p-4">
                    <img className="max-w-[100px]" src={product.image} />
                  </td>
                  <td className="p-4 max-w-[200px]">
                    {product.description.slice(0, 100)}...
                  </td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">{formatVND(product.price)}</td>
                  <td className="p-4">
                    <Link
                      to={`edit/${product.id}`}
                      className="text-lg font-bold text-blue-600 dark:text-blue-500 hover:underline mr-5"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-lg font-bold text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerProduct;
