import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

type Props = {};
type FormValues = {
  category: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
};
const EditProduct = (props: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const getProduct = async (id: number) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      data && reset(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!id) return;
    getProduct(Number(id));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (product) => {
    try {
      if (product) {
        const { data } = await axios.put(
          "http://localhost:3000/products/" + id,
          product
        );
        data && navigate("/admin/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <h1 className="text-3xl font-bold">Cập nhật sản phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-[60%]">
        <div className="grid grid-cols-2 gap-10">
          <div className="">
            <label htmlFor="">
              Danh mục <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              {...register("category", { required: true, minLength: 3 })}
              type="text"
              className="mt-2"
              placeholder="Nhập vào tên danh mục"
            />
            {errors.category && errors.category.type === "required" && (
              <span className="text-red-500">
                Danh mục sản phẩm không được bỏ trống
              </span>
            )}
            {errors.category && errors.category.type === "minLength" && (
              <span className="text-red-500">
                Danh mục sản phẩm không được ít hơn 3 ký tự
              </span>
            )}
          </div>

          <div className="">
            <label htmlFor="">
              Tên sản phẩm <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              {...register("name", { required: true, minLength: 5 })}
              type="text"
              className="mt-2"
              placeholder="Nhập vào tên sản phẩm"
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-red-500">
                Tên sản phẩm không được bỏ trống
              </span>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <span className="text-red-500">
                Tên sản phẩm không được ít hơn 5 ký tự
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-4">
          <div className="">
            <label htmlFor="">
              Giá sản phẩm <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              {...register("price", { required: true, min: 0 })}
              type="number"
              className="mt-2"
              placeholder="Nhập vào giá sản phẩm"
            />
            {errors.price && errors.price.type === "required" && (
              <span className="text-red-500">
                Giá sản phẩm không được bỏ trống
              </span>
            )}
            {errors.price && errors.price.type === "min" && (
              <span className="text-red-500">
                Giá sản phẩm không được nhỏ hơn 0đ
              </span>
            )}
          </div>

          <div className="">
            <label htmlFor="">Ảnh sản phẩm</label>
            <br />
            <input
              {...register("image")}
              type="text"
              className="mt-2"
              placeholder="Nhập vào url ảnh sản phẩm"
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="">Nhập vào mô tả sản phẩm</label>
          <br />
          <textarea
            {...register("description")}
            className="mt-2"
            name="description"
            id=""
            placeholder="Nhập vào mô tả sản phẩm"
            cols={30}
            rows={7}
          ></textarea>
        </div>

        <button className="text-center font-bold text-xl bg-slate-500 text-white py-5 w-full mt-4 rounded-xl hover:opacity-80 duration-200">
          Cập nhật sản phẩm
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
