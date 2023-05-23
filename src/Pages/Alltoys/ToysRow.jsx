import React from "react";
import { Link } from "react-router-dom";

const ToysRow = ({ toy }) => {
  const { _id, name, subCategory, price, quantity } = toy;

  return (
    <tr key={_id} className="border rounded-2xl">
      <td className="px-4 py-2">
        <p>{name}</p>
      </td>
      <td className="px-4 py-2">{subCategory}</td>
      <td className="px-4 py-2">{price}</td>
      <td className="px-4 py-2">{quantity}</td>
      <td className="px-4 py-2">
        <Link className="btn btn-primary" to={`/viewDetails/${_id}`}>
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default ToysRow;
