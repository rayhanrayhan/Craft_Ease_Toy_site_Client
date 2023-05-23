import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaShippingFast,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const ViewDetails = () => {
  const viewDetailsData = useLoaderData();
  console.log(viewDetailsData);

  // Helper function to render the rating stars
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="inline text-yellow-400" />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="inline text-yellow-400" />
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="inline text-yellow-400" />
      );
    }

    return stars;
  };

  return (
    <div className="py-52 md:p-32 text-center mt-10 mb-0">
      <div className="md:flex justify-between items-center card border px-3 py-2 drop-shadow-lg hover:drop-shadow-2xl duration-300 border-red-600 lg:card-side bg-base-100 shadow-xl inline-block">
        <figure className="m-0">
          <img className="" src={viewDetailsData.image} alt="Album" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title text-3xl font-bold mb-4">
            {viewDetailsData.name}
          </h2>
          <p className="text-xl mb-4 text-yellow-400">
            <span className="text-black font-bold">Rating:</span>{" "}
            {renderRatingStars(viewDetailsData.rating)}
          </p>
          <p className="text-xl mb-4">
            <span className="text-black font-bold">Price: $</span>{" "}
            {viewDetailsData.price}
          </p>
          <p className="mb-4">{viewDetailsData.description}</p>
          <p className="mb-4 ">
            Available Quantity: {viewDetailsData.quantity}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
