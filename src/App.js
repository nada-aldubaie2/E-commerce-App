import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/Home/HomePage";
import NavBar from "./Components/Utility/NavBar";
import Footer from "./Components/Utility/Footer";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategories from "./Pages/Categories/AllCategories";
import AllBrandsPage from "./Pages/Brands/AllBrandsPage";
import ProductShopPage from "./Pages/Products/ProductShopPage";
import ProducDetailsPage from "./Components/Products/ProducDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import PayMethodPage from "./Pages/PayMethod/PayMethodPage";
import AdminAllProductPage from "./Pages/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage ";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProduct from "./Components/Admin/AdminAddProduct";
import UserAllOrderPage from "./Pages/User/UserAllOrderPage";
import UserFavoriteProduct from "./Components/User/UserFavoriteProduct";
import UserFavoriteProductPage from "./Pages/User/UserFavoriteProductPage";
import UserAllAdressesPage from "./Pages/User/UserAllAdressesPage";
import UserAddAdressPage from "./Pages/User/UserAddAdressPage";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage";
import UserProfilePage from "./Pages/User/UserProfilePage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategories" element={<AllCategories />} />
          <Route path="/allbrands" element={<AllBrandsPage />} />
          <Route path="/products" element={<ProductShopPage />} />
          <Route path="/products/:id" element={<ProducDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<PayMethodPage />} />
          <Route
            path="/admin/allproducts"
            element={<AdminAllProductPage />}
          ></Route>
          <Route
            path="/admin/allorders"
            element={<AdminAllOrdersPage />}
          ></Route>
          <Route
            path="/admin/order/:id"
            element={<AdminOrderDetailsPage />}
          ></Route>
          <Route
            path="/admin/addbrand"
            element={<AdminAddBrandPage />}
          ></Route>
          <Route
            path="/admin/addcategory"
            element={<AdminAddCategoryPage />}
          ></Route>
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          ></Route>
          <Route
            path="/admin/addproduct"
            element={<AdminAddProduct />}
          ></Route>
          <Route
            path="/user/allorders"
            element={<UserAllOrderPage />}
          ></Route>
          <Route
            path="/user/favoriteproduct"
            element={<UserFavoriteProductPage />}
          ></Route>
          <Route
            path="/user/addresses"
            element={<UserAllAdressesPage />}
          ></Route>
          <Route
            path="/user/add-address"
            element={<UserAddAdressPage />}
          ></Route>
          <Route
            path="/user/edit-address"
            element={<UserEditAddressPage />}
          ></Route>
          <Route
            path="/user/profile"
            element={<UserProfilePage />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
