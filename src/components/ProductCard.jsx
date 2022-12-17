import React from "react";
import { Link } from "react-router-dom";
import "./styles/ProductCard.css";

const ProductCard = ({ title, price, image, score, route }) => {
  return (
    <Link to={route}>
      <div className="product-card border p-3 p-sm-4 mb-4 position-relative">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="position-absolute score-div">
            <span className="gray mx-1">{score}</span>
            <i className="fa fa-star"></i>
          </div>
          <img className="product-img" src={image} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <p className="product-title font-sans">{title}</p>
          <p className="product-price font-sans">
            قیمت: <span>{price}</span> تومان
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
