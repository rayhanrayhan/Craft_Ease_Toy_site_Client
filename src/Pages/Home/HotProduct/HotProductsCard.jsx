import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HotProductsCard = ({ product }) => {
  const renderRatingStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} />);
    }

    return stars;
  };

  return (
    <div data-aos="zoom-in" className="border p-3 bg-slate-50 border-red-500  rounded-lg my-3 hover:shadow-2xl duration-300">
      <img src={product.img} alt="" />
      <p className="my-1">
        <span className="font-bold ">price: $</span>
        {product.price}
      </p>
      <p className="font-semibold flex justify-between">
        Rating:{" "}
        <span className="text-yellow-500 inline-flex items-center gap-1">
          {renderRatingStars()}
          <span className="text-black mx-1"> {product.rating}</span>
        </span>{" "}
      </p>
    </div>
  );
};

export default HotProductsCard;
