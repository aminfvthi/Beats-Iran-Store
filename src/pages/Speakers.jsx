import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ProductCard } from "../components";
import { speakers } from "../data/dummy";

const Speakers = () => {
  const [setCategorie] = useOutletContext();

  useEffect(() => {
    setCategorie("speakers");
  });

  return (
    <div className="container">
      <div className="row px-2 px-sm-0 mt-3 mt-md-5">
        {speakers.map((item) => (
          <div className="col-6 col-lg-4 col-xxl-3 mb-4">
            <ProductCard
              title={item.title}
              price={item.price}
              image={item.image}
              score={item.score}
              route={item.route}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speakers