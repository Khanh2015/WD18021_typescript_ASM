import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type Props = {};

const AdminSidebar = (props: Props) => {
  const navigate = useNavigate();

  const handleLognOut = async () => {
    try {
      const check = () => {
        return Swal.fire({
          title: "Logn out?",
          text: "Bạn chắc chắn muốn đăng xuất chứ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Đăng xuất",
        });
      };
      const result = await check();
      if (result.isConfirmed) {
        Swal.fire({
          title: "Successfully!",
          text: "Đăng xuất thành công.",
          icon: "success",
        });
        localStorage.removeItem("user");
        navigate("/login");
      }
    } catch (error) {}
  };
  return (
    <div className="bg-slate-300 min-h-[100vh]">
      <ul className="mx-5 my-10 fixed top-0 left-0">
        <li>
          <NavLink
            className="p-3 my-2 font-semibold text-lg duration-150 hover:bg-white rounded-lg block "
            to="/admin"
          >
            <i className="fa-solid mr-1 fa-chart-pie"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="p-3 my-2 font-semibold text-lg duration-150 hover:bg-white rounded-lg block "
            to="/admin/products"
          >
            <i className="fa-solid mr-1 fa-list"></i> Product manager
          </NavLink>
        </li>
        <li>
          <NavLink
            className="p-3 my-2 font-semibold text-lg duration-150 hover:bg-white rounded-lg block "
            to="/admin/products/add"
          >
            <i className="fa-solid mr-1 fa-square-plus"></i> Add product
          </NavLink>
        </li>
        <li>
          <button
            onClick={handleLognOut}
            className="p-3 my-2 font-semibold text-lg duration-150 hover:bg-white rounded-lg block w-full text-left "
          >
            <i className="fa-solid fa-right-from-bracket"></i> Logn out
          </button>
        </li>
        <li>
          <NavLink
            className="p-3 my-2 font-semibold text-lg duration-150 hover:bg-white rounded-lg block "
            to="/"
          >
            <i className="fa-solid mr-1 fa-house"></i> Back to homepage
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
