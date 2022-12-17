import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-xs-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
            <h4 className="font-yekan text-white">فروشگاه بیتس ایران</h4>
            <p
              className="mt-4 font-yekan text-white text-opacity-75"
              style={{ fontSize: "0.8rem" }}
            >
              عرضه کننده محصولات بیتس در ایران
              <br />
              به همراه گارانتی و خدمات پس از فروش
            </p>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4 my-5 my-md-0 mb-md-5 mb-lg-0">
            <div className="d-flex justify-content-center mx-auto gap-5">
              <div className="d-flex flex-column align-items-start">
                <h6 className="pb-2 text-white font-yekan">محصولات</h6>
                <Link to="/products/headphones" className="my-1 text-white font-yekan text-opacity-75">
                  هدفون
                </Link>
                <Link to="/products/earphones" className="my-1 text-white font-yekan text-opacity-75">
                  ایرفون
                </Link>
                <Link to="/products/speakers" className="my-1 text-white font-yekan text-opacity-75">
                  اسپیکر
                </Link>
                <Link to="/products/accessories" className="my-1 text-white font-yekan text-opacity-75">
                  اکسسوری
                </Link>
              </div>
              <div className="d-flex flex-column align-items-start">
                <h6 className="pb-2 text-white font-yekan">خدمات مشتریان</h6>
                <Link className="my-1 text-white font-yekan text-opacity-75">
                  گارانتی
                </Link>
                <Link className="my-1 text-white font-yekan text-opacity-75">
                  تعمیرات
                </Link>
                <Link className="my-1 text-white font-yekan text-opacity-75">
                  نحوه خرید
                </Link>
                <Link className="my-1 text-white font-yekan text-opacity-75">
                  درباره ما
                </Link>
                <Link className="my-1 text-white font-yekan text-opacity-75">
                  تماس با ما
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-4 d-flex flex-column justify-content-start align-items-center">
            <h5 className="font-yekan text-white">
              ما را در فضای مجازی دنبال کنید
            </h5>
            <div className="d-flex justify-content-center align-items-center mt-3 gap-4">
              <Link className="socials">
                <i className="fa fa-reddit text-white"></i>
              </Link>
              <Link className="socials">
                <i className="fa fa-telegram text-white "></i>
              </Link>
              <Link className="socials">
                <i className="fa fa-youtube text-white"></i>
              </Link>
              <Link className="socials">
                <i className="fa fa-twitter text-white"></i>
              </Link>
              <Link className="socials">
                <i className="fa fa-facebook text-white"></i>
              </Link>

              <Link className="socials">
                <i className="fa fa-instagram text-white"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center py-3 copyright-sec">
        <span className="text-white font-yekan" style={{ fontSize: "0.8rem" }}>
          تمامی حقوق محصفوظ می باشد
        </span>
        <span className="text-white mx-3">|</span>
        <span className="text-white">Copyright 2022</span>
      </div>
    </>
  );
};

export default Footer;
