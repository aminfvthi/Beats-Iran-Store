import React from "react";
import { Link } from "react-router-dom";
import headphones from "../assets/images/headphones.jpg"
import earphones from "../assets/images/earphones.jpeg"
import speakers from "../assets/images/speakers.jpeg"
import accessories from "../assets/images/accessories.jpeg"

import "./styles/Categories.css";

const Categories = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center my-5">
          <h2 className="black font-yekan">دسته بندی محصولات</h2>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-6 col-lg-3 mb-4">
          <Link to="products/headphones">
            <div className="categories-card">
              <div className="row p-2">
                <div className="col-6 d-flex justify-content-start align-items-center px-4">
                  <h3 className="black font-yekan categories-title">هدفون</h3>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <img
                    src={headphones}
                    alt=""
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <Link to="products/earphones">
            <div className="categories-card">
              <div className="row p-2">
                <div className="col-6 d-flex justify-content-start align-items-center px-4">
                  <h3 className="black font-yekan categories-title">ایرفون</h3>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <img
                    src={earphones}
                    alt=""
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <Link to="products/speakers">
            <div className="categories-card">
              <div className="row p-2">
                <div className="col-6 d-flex justify-content-start align-items-center px-4">
                  <h3 className="black font-yekan categories-title">اسپیکر</h3>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <img
                    src={speakers}
                    alt=""
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6 col-lg-3 mb-4">
          <Link to="products/accessories">
            <div className="categories-card">
              <div className="row p-2">
                <div className="col-6 d-flex justify-content-start align-items-center px-4">
                  <h3 className="black font-yekan categories-title">اکسسوری</h3>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <img
                    src={accessories}
                    alt=""
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
