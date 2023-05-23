import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ toy, handleDelete }) => {
    const { _id, name, subCategory, price, seller } = toy;
    return (
        <tr className="border rounded-2xl">
            <td className="px-4 py-2">
                <p>{name}</p>
            </td>
            <td className="px-4 py-2">{subCategory}</td>
            <td className="px-4 py-2">{seller}</td>
            <td className="px-4 py-2">{price}</td>
            <td className="px-4 py-2 text-right space-x-2">
                <Link className="btn btn-info" to={`/update/${_id}`}>
                    Update
                </Link>
                <button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default MyToysRow;