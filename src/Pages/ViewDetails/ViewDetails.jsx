import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewDetailsData = useLoaderData();
  console.log(viewDetailsData);

  return (
    <div className="p-32 text-5xl">
      <h1>{viewDetailsData.name}</h1>
    </div>
  );
};

export default ViewDetails;
