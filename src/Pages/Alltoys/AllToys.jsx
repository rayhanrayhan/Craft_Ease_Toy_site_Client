import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetch(
      `https://craft-ease-main-server.vercel.app/allToys?search=${searchQuery}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [searchQuery]);

  return (
    <div className="p-4 md:p-28">
      <h1 className="text-4xl text-center my-10">All Toys</h1>

      {/* Reduced padding on mobile devices */}
      <div className="text-center my-6">
        <input
          className="border px-3 mx-3 w-full md:w-1/4 py-3 rounded-lg md:rounded-none"
          type="text"
          placeholder="Type here for your favorite toys..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>SUB-CATEGORY</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {allToys.map((toy) => (
            <ToysRow key={toy._id} toy={toy} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
