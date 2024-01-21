import { Navigate } from "react-router-dom";
import { isAuthenticate } from "../../helper/utilities";
import Swal from "sweetalert2";

type PrivateRouterProps = {
  children: JSX.Element;
};

const PrivateRouter = (props: PrivateRouterProps) => {
  const notify = () => {
    Swal.fire({
      title: "Error",
      text: "Bạn không có quyền truy cập vào admin!",
      icon: "error",
    });
  };
  const { user } = isAuthenticate();
  if (user?.role !== "admin") {
    notify();
    return <Navigate to={"/login"} />;
  }
  return props.children;
};

export default PrivateRouter;
