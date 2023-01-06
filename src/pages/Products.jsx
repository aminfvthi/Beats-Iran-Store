import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./styles/Products.css";

const Products = () => {
  const [categorie, setCategorie] = useState("categories");
  const navigate = useNavigate();

  const handleClick = (route) => {
    setCategorie(route);
    navigate(route);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="container">
        <div className="row mt-5 pb-3 border-bottom font-yekan gray">
          <div className="d-flex justify-content-start align-items-center">
            <h6 className="mt-1">محصولات / </h6>
            <select value={categorie} className="select gray">
              <option hidden disabled value="categories">
                دسته بندی ها
              </option>
              <option
                className="font-yekan"
                value={"headphones"}
                onClick={() => handleClick("headphones")}
              >
                هدفون ها
              </option>
              <option
                value={"earphones"}
                onClick={() => handleClick("earphones")}
              >
                ایرفون ها
              </option>
              <option
                value={"speakers"}
                onClick={() => handleClick("speakers")}
              >
                اسپیکر ها
              </option>
              <option
                value={"accessories"}
                onClick={() => handleClick("accessories")}
              >
                لوازم جانبی
              </option>
            </select>
          </div>
        </div>
      </div>
      <Outlet context={[setCategorie]} />
    </>
  );
};

export default Products;
