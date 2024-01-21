import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LogninPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./pages/layouts/Layout";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdminLayout from "./pages/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import ManagerProduct from "./pages/ManagerProduct";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import PrivateRouter from "./components/elements/PrivateRouter";
import Signup from "./pages/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route
            path="/admin"
            element={
              <PrivateRouter>
                <AdminLayout />
              </PrivateRouter>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ManagerProduct />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
