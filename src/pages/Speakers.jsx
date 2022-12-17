import React from 'react'
import { ProductCard } from "../components";
import { speakers } from "../data/dummy";

const Speakers = () => {
  return (
    <div className="container">
      <div className="row px-2 px-sm-0 mt-3 mt-md-5">
        {speakers.map((item) => (
          <div className="col-6 col-lg-4 col-xxl-3">
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