import React from "react";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import solo3 from "../assets/images/--solo3.png";
import studioBuds from "../assets/images/--studio-buds.png";
import flex from "../assets/images/--flex.png";
import "./styles/MostSaled.css";

const MostSaled = () => {
  return (
    <>
      <div className="container d-none d-lg-flex flex-column">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center my-5">
            <h2 className="font-yekan black">محصولات پر فروش</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mb-5">
            <Link to="">
              <div className="most-saled-card mx-2 p-4">
                <div className="d-flex justify-content-end mb-3">
                  <h4 className="black font-serif product-name">Beats Flex</h4>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={flex}
                    alt=""
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center my-4">
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "black" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{
                      backgroundColor: "white",
                      border: "solid 1px gray",
                    }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "red" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "aqua" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "yellow" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "pink" }}
                  ></span>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <h4 className="black font-sans price">
                    قیمت: 3.500.000 تومان
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4 mb-5">
            <Link to="">
              <div className="most-saled-card mx-2 p-4">
                <div className="d-flex justify-content-end mb-3">
                  <h4 className="black font-serif product-name">
                    Beats Solo3 Wireless
                  </h4>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={solo3}
                    alt=""
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center my-4">
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "black" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{
                      backgroundColor: "white",
                      border: "solid 1px gray",
                    }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "red" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "gray" }}
                  ></span>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <h4 className="black font-sans price">
                    قیمت: 3.500.000 تومان
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-4 mb-5">
            <Link to="">
              <div className="most-saled-card mx-2 p-4">
                <div className="d-flex justify-content-end mb-3">
                  <h4 className="black font-serif product-name">
                    Beats Studio Buds
                  </h4>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={studioBuds}
                    alt=""
                    style={{ width: "80%" }}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center my-4">
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "black" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{
                      backgroundColor: "white",
                      border: "solid 1px gray",
                    }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "red" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "blue" }}
                  ></span>
                  <span
                    className="product-color mx-1"
                    style={{ backgroundColor: "gray" }}
                  ></span>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <h4 className="black font-sans price">
                    قیمت: 3.500.000 تومان
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostSaled;
