import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./styles/Products.css";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row mt-5 pb-3 border-bottom font-yekan gray">
          <div className="d-flex justify-content-start align-items-center">
            <h6 className="mt-1">محصولات / </h6>
            <select defaultValue={"categories"} className="select gray">
              <option value={"categories"} className="d-none" disabled>
                دسته بندی ها
              </option>
              <option
                value={"headphones"}
                onClick={() => navigate("headphones")}
              >
                هدفون ها
              </option>
              <option 
                value={"earphones"}
                onClick={() => navigate("earphones")}
              >
                ایرفون ها
              </option>
              <option
                value={"speakers"}
                onClick={() => navigate("speakers")}
              >
                اسپیکر ها
              </option>
              <option
                value={"accessories"}
                onClick={() => navigate("accessories")}
              >
                لوازم جانبی
              </option>
            </select>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Products;
