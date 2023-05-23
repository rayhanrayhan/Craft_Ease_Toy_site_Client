import React from "react";

const Gallery = () => {
  const toyCards = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/91TnJGzwZKL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81Ww4tB4IdL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/A1i2PNx4LeL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/81j-koYXMFL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/815rh4y-ZaL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/91NI0FnjjRL._AC_SL1500_.jpg",
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center font-bold py-4 mt-4">
          Our Toys Gallery
        </h2>
        <h4 className="text-2xl text-center font-bold  mb-4">
          Creativity for Kids
        </h4>
      </div>
      <div className="grid grid-cols-1 w-9/12 mb-4  mx-auto md:grid-cols-3 gap-4">
        {toyCards.map((toyCard) => (
          <div
            className="w-full  hover:shadow-slate-400 duration-300 border-red-600 transition-all border rounded-xl p-5 bg-zinc-100 shadow-md"
            key={toyCard.id}
          >
            <img
              src={toyCard.image}
              alt={`Toy ${toyCard.id}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
