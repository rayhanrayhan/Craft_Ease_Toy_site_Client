import React from "react";
import { Link } from "react-router-dom";

const ToysRow = ({ toy }) => {
  const { _id } = toy;

  return (
    <div className="p-32 border">
      <Link to={`/viewDetails/${_id}`}>view details </Link>
    </div>
  );
};

export default ToysRow;
