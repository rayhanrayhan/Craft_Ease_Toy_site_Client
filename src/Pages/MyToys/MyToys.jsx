import React, { useContext, useEffect, useState } from "react";
import MyToysRow from "./MyToysRow";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [MyToys, setMyToys] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const url = `https://craft-ease-main-server.vercel.app/myToys?email=${user?.email}&sort=${sort}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email, sort]);

  // delete toy
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://craft-ease-main-server.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy deleted Done.", "success");
              const remaining = MyToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="p-4 md:p-28">
      <h1 className="text-4xl text-center my-10">My Toys</h1>
      <div className="my-4 text-right ml-auto">
        <button
          onClick={() => setSort("low")}
          className="btn btn-outline btn-info mr-2"
        >
          Low Price
        </button>
        <button
          onClick={() => setSort("high")}
          className="btn btn-outline btn-success"
        >
          High Price
        </button>
      </div>
      <div>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>SUB-CATEGORY</th>
              <th>SELLER</th>
              <th>PRICE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {MyToys.map((toy) => (
              <MyToysRow key={toy._id} toy={toy} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyToys;
