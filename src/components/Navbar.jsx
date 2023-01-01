import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import logo from "../assets/images/logo.png";
import "./styles/Navbar.css";

const Navbar = () => {
  const { handleSidebar, isLoggedIn } = useAppContext();

  return (
    <nav className="sticky">
      <div className="container-fluid main-nav">
        <div className="d-flex justify-content-between align-items-center p-3">
          <div className="d-flex align-items-center">
            <div onClick={handleSidebar} className="navbar-btn">
              <i className="fa fa-navicon black hover-gray"></i>
            </div>
            <Link to="/" className="align-items-center brand mx-3">
              <span className="font-yekan black">فروشگاه بیتس ایران</span>
              <img className="navbar-logo mx-2" src={logo} alt="" />
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <form className="d-none d-lg-flex">
              <input
                type="text"
                placeholder="جستجو"
                className="search font-yekan px-3"
              />
              <div className="search-btn px-3 py-1">
                <i className="fa fa-search black"></i>
              </div>
            </form>
            <Link
              to="/cart"
              className="d-none d-lg-block navbar-btn black hover-gray mx-3"
            >
              <i className="fa fa-shopping-cart"></i>
            </Link>
            <Link
              to={`${isLoggedIn ? "/profile" : "/login"}`}
              className="navbar-btn black hover-gray "
            >
              <i className="fa fa-user-circle"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid d-none d-lg-flex products-nav">
        <div className="d-flex align-items-center font-yekan">
          <Link
            to="products/headphones"
            className="products-nav-item gray hover-black d-flex justify-content-center align-items-center"
          >
            <div>هدفون</div>
          </Link>
          <Link
            to="products/earphones"
            className="products-nav-item gray hover-black d-flex justify-content-center align-items-center"
          >
            <div>ایرفون</div>
          </Link>
          <Link
            to="products/speakers"
            className="products-nav-item gray hover-black d-flex justify-content-center align-items-center"
          >
            <div>اسپیکر</div>
          </Link>
          <Link
            to="products/accessories"
            className="products-nav-item gray hover-black d-flex justify-content-center align-items-center"
          >
            <div>لوازم جانبی</div>
          </Link>
          <Link
            to="/warranty"
            className="products-nav-item gray hover-black d-flex justify-content-center align-items-center"
          >
            <div>گارانتی</div>
          </Link>
          <Link
            to="/repair"
            className="products-nav-item gray hover-black d-flex justify-content-center align-items-center"
          >
            <div>تعمیرات</div>
          </Link>
          <Link
            to="/how-to-buy"
            className="products-nav-item gray hover-black d-flex justify-content-center align-items-center"
          >
            <div>نحوه خرید</div>
          </Link>
          <Link
            to="/contact-us"
            className="products-nav-item gray hover-black d-flex justify-content-center align-items-center"
          >
            <div>تماس با ما</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
