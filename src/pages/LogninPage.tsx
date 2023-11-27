import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types/User";
import axios, { AxiosError } from "axios";

type FormValues = {
  // email: string;
  username: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/users");
      data && setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (account) => {
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/auth/login",
        account
      );
      if (data) {
        localStorage.setItem("token", data.token);
        navigate("/admin");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          setError("username", {
            type: "manual",
            message: "Tên tài khoản hoặc mật khẩu không đúng",
          });
          setError("password", {
            type: "manual",
            message: "Tên tài khoản hoặc mật khẩu không đúng",
          });
        } else {
          console.log(error);
        }
      }
    }
  };
  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-auto h-8 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png"
            alt="logo"
          />
          ADIDAS
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              {/* <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  {...register("email", { required: true, minLength: 10 })}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Email không được bỏ trống
                  </span>
                )}
                {errors.email && errors.email.type === "minLength" && (
                  <span className="text-red-500 text-sm">
                    Email không ngắn hơn 10 ký tự
                  </span>
                )}
              </div> */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  {...register("username", { required: true, minLength: 3 })}
                  // onChange={() => clearErrors("username")}
                  type="username"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username..."
                />
                {errors.username && errors.username.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Username không được bỏ trống
                  </span>
                )}
                {errors.username && errors.username.type === "minLength" && (
                  <span className="text-red-500 text-sm">
                    Username không ngắn hơn 3 ký tự
                  </span>
                )}
                {errors.username && errors.username.type === "manual" && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true, minLength: 5 })}
                  // onChange={() => clearErrors("password")}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.password && errors.password.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Mật khẩu không được bỏ trống
                  </span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="text-red-500 text-sm">
                    Mật khẩu không ngắn hơn 5 ký tự
                  </span>
                )}
                {errors.password && errors.password.type === "manual" && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-500 hover:opacity-70 duration-200 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
