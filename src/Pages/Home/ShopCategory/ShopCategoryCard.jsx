import React from "react";

const ShopCategoryCard = ({ toy }) => {
  return (
    <div className="border border-red-500 p-5 rounded-lg shadow-md hover:shadow-2xl duration-300 hover:drop-shadow-lg">
      <div className=" w-60 m-auto">
        {" "}
        <img className="w-full relative   p-4" src={toy.image} alt="" />
      </div>
      <div className="relative  mt-6">
        <h2>{toy.name}</h2>
        <p>{toy.rating}</p>
        <p>price:$ {toy.price}</p>
      </div>
    </div>
  );
};

export default ShopCategoryCard;
