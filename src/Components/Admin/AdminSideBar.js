import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
    <div className="sidebar">
    <div className="d-flex flex-column">
      <Link to="/admin/allorders" >
        <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
          اداره الطلبات
        </div>
      </Link>
      <Link to="/admin/allproducts" >
        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          اداره المنتجات
        </div>
      </Link>
      <Link to="/admin/addbrand" >
        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          اضف ماركه
        </div>
      </Link>
      <Link to="/admin/addcategory" >
        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          اضف تصنيف
        </div>
      </Link>
      <Link to="/admin/addsubcategory">
        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          اضف تصنيف فرعي
        </div>
      </Link>
      <Link to="/admin/addproduct">
        <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
          اضف منتج
        </div>
      </Link>
    </div>
  </div>
  );
}

export default AdminSideBar;
