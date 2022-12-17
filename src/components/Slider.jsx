import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const Slider = () => {
  return (
    <Carousel className="d-none d-lg-block">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
