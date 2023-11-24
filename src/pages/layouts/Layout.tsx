import Header from "../../components/elements/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/elements/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
