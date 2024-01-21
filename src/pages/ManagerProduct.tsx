import { useEffect, useState } from "react";
import { ProductDetailType } from "../types/Product";
import { Link } from "react-router-dom";
import { formatVND } from "../helper/utilities";
import { list, remove } from "../api/product";
import Swal from "sweetalert2";

type Props = {};

const ManagerProduct = (props: Props) => {
  const [products, setProducts] = useState<ProductDetailType[]>([]);

  const getAllProduct = async () => {
    try {
      const { data } = await list();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (_id: string) => {
    if (!_id) return;
    try {
      const check = () => {
        return Swal.fire({
          title: "Delete?",
          text: "Bạn chắc rằng mình muốn xóa sản phẩm này chứ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Xóa",
        });
      };
      const result = await check();
      if (result.isConfirmed) {
        Swal.fire({
          title: "Successfully!",
          text: "Bạn đã xóa sản phẩm thành công.",
          icon: "success",
        });
        const { data: product } = await remove(_id);
        if (product) {
          const newProducts = products.filter((product) => product._id !== _id);
          setProducts(newProducts);
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
                  <td className="p-4 max-w-[200px]">{product.description}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">{formatVND(product.price)}</td>
                  <td className="p-4">
                    <Link
                      to={`edit/${product._id}`}
                      className="text-lg font-bold text-blue-600 dark:text-blue-500 hover:underline mr-5"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
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
