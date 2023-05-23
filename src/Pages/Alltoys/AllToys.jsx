import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const allToysData = useLoaderData();
  console.log(allToysData);

  return (
    <div className="p-28">
      <h2> all toys here</h2>
      {allToysData?.map((toy) => (
        <ToysRow key={toy._id} toy={toy}></ToysRow>
      ))}
    </div>
  );
};

export default AllToys;
