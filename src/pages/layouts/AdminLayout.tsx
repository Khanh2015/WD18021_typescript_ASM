import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/elements/AdminSidebar";
import AdminHeader from "../../components/elements/AdminHeader";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div className="grid grid-cols-[17%_83%]">
      <AdminSidebar />
      <main>
        <AdminHeader />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
