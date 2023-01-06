import React, { useEffect } from "react";
import { Slider, MostSaled, Categories } from "../components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Slider />
      <MostSaled />
      <Categories />
    </>
  );
};

export default Home;
