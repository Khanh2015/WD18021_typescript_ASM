import { NavLink } from "react-router-dom";

type Props = {};

const AdminSidebar = (props: Props) => {
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
