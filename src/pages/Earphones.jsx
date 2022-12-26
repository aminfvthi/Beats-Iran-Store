import React from 'react'
import { ProductCard } from "../components";
import { earphones } from "../data/dummy";

const Earphones = () => {
  return (
    <div className="container">
      <div className="row px-2 px-sm-0 mt-3 mt-md-5">
        {earphones.map((item) => (
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

export default Earphones