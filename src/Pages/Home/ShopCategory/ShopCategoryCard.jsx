import React from "react";
import {
  FaShippingFast,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopCategoryCard = ({ toy }) => {
  const renderRating = () => {
    const rating = Math.floor(toy.rating); // Round down the rating value
    const stars = [];

    // Create full star icons
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} />);
    }

    // Check if there's a half star
    if (toy.rating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={rating} />);
    }

    // Fill the remaining stars with empty star icons
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} />);
    }

    return stars;
  };

  return (
    <div className="border border-red-500 p-5 rounded-lg shadow-md hover:shadow-2xl duration-300 hover:drop-shadow-lg">
      <div className="w-60 m-auto">
        <img className="w-full relative p-4" src={toy.image} alt="" />
      </div>
      <div className="relative mt-6">
        <div className="">
          <h2>{toy.name}</h2>
          <div className="flex items-center">
            <div className=" text-yellow-500 inline-flex">
              {" "}
              {renderRating()}
            </div>
            <p className="ml-2">{toy.rating}</p>
          </div>
          <p>price: $ {toy.price}</p>
        </div>
        <div className="text-end ">
          <Link className="btn btn-primary" to={`/viewDetails/${toy._id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCategoryCard;
