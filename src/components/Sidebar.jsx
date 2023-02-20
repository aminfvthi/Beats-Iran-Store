import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import "./styles/Sidebar.css";

const Sidebar = () => {
  const { activeSidebar, handleSidebar, isLoggedIn } = useAppContext();

  return (
    <>
      {activeSidebar ? (
        <div className="sidebar active d-flex flex-column p-5 bg-light font-yekan">
          <div className="d-flex justify-content-between align-items-center">
            <NavLink to="/" className="d-flex align-items-center sidebar-brand">
              <span className="black mx-2">فروشگاه بیتس ایران</span>
            </NavLink>
            <Link onClick={handleSidebar}>
              <i className="fa fa-close black hover-gray close-btn"></i>
            </Link>
          </div>
          <hr />
          <div className="d-flex flex-column py-2">
            <NavLink
              to="/"
              className="py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-home black"></i>
              <span className="black mx-2">خانه</span>
            </NavLink>
            <NavLink
              to={`${isLoggedIn ? "/account" : "/login"}`}
              className="py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-user-circle black"></i>
              <span className="black mx-2">حساب کاربری</span>
            </NavLink>
            <NavLink
              to="/cart"
              className="py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-shopping-cart black"></i>
              <span className="black mx-2">سبد خرید</span>
            </NavLink>
          </div>
          <div className="d-flex flex-column mt-4">
            <NavLink
              to="products/headphones"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-headphones black"></i>
              <span className="black mx-2">هدفون</span>
            </NavLink>
            <Link
              to="products/earphones"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-volume-control-phone black"></i>
              <span className="black mx-2">ایرفون</span>
            </Link>
            <Link
              to="products/speakers"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-volume-up black"></i>
              <span className="black mx-2">اسپیکر</span>
            </Link>
            <Link
              to="products/accessories"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-plug black"></i>
              <span className="black mx-2"> لوازم جانبی</span>
            </Link>
            <Link
              to="/warranty"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-cogs black"></i>
              <span className="black mx-2">گارانتی</span>
            </Link>
            <Link
              to="/repair"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-wrench black"></i>
              <span className="black mx-2">تعمیرات</span>
            </Link>
            <Link
              to="/how-to-buy"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-question-circle black"></i>
              <span className="black mx-2">نحوه خرید</span>
            </Link>
            <Link
              to="/contact-us"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-phone black"></i>
              <span className="black mx-2">تماس با ما</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="sidebar d-flex flex-column p-5 bg-light font-yekan">
          <div className="d-flex justify-content-between align-items-center">
            <NavLink to="/" className="d-flex align-items-center sidebar-brand">
              <span className="black mx-2">فروشگاه بیتس ایران</span>
            </NavLink>
            <Link onClick={handleSidebar}>
              <i className="fa fa-close black hover-gray close-btn"></i>
            </Link>
          </div>
          <hr />
          <div className="d-flex flex-column py-2">
            <NavLink
              to="/"
              className="py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-home black"></i>
              <span className="black mx-2">خانه</span>
            </NavLink>
            <NavLink
              to={`${isLoggedIn ? "/account" : "/login"}`}
              className="py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-user-circle black"></i>
              <span className="black mx-2">حساب کاربری</span>
            </NavLink>
            <NavLink
              to="/cart"
              className="py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-shopping-cart black"></i>
              <span className="black mx-2">سبد خرید</span>
            </NavLink>
          </div>
          <div className="d-flex flex-column mt-4">
            <NavLink
              to="products/headphones"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-headphones black"></i>
              <span className="black mx-2">هدفون</span>
            </NavLink>
            <Link
              to="products/earphones"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-volume-control-phone black"></i>
              <span className="black mx-2">ایرفون</span>
            </Link>
            <Link
              to="products/speakers"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-volume-up black"></i>
              <span className="black mx-2">اسپیکر</span>
            </Link>
            <Link
              to="products/accessories"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-plug black"></i>
              <span className="black mx-2"> لوازم جانبی</span>
            </Link>
            <Link
              to="/warranty"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-cogs black"></i>
              <span className="black mx-2">گارانتی</span>
            </Link>
            <Link
              to="/repair"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-wrench black"></i>
              <span className="black mx-2">تعمیرات</span>
            </Link>
            <Link
              to="/how-to-buy"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-question-circle black"></i>
              <span className="black mx-2">نحوه خرید</span>
            </Link>
            <Link
              to="/contact-us"
              className="my-1 py-2 px-3 sidebar-item"
              onClick={handleSidebar}
            >
              <i className="fa fa-phone black"></i>
              <span className="black mx-2">تماس با ما</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
