import React, { useEffect, useState } from "react";
import HotProductsCard from "./HotProductsCard";

const HotProduct = () => {
  const [hotProducts, setHotProducts] = useState([]);

  useEffect(() => {
    fetch("/hotProduct.json")
      .then((res) => res.json())
      .then((data) => {
        setHotProducts(data);
      });
  }, []);

  return (
    <div className="w-9/12 mx-auto ">
      <div>
        <h1 className="text-3xl text-center my-4 font-bold">
          What's Hot Right Now
        </h1>
      </div>
      <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {hotProducts.map((product) => (
          <HotProductsCard
            key={product._id}
            product={product}
          ></HotProductsCard>
        ))}
      </div>
    </div>
  );
};

export default HotProduct;
