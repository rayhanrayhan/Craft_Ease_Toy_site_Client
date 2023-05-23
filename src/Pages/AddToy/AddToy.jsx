import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const seller = form.seller.value;
    const subCategory = form.category.value;
    const price = parseFloat(form.price.value);
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const image = form.photo.value;
    const description = form.description.value;

    const toy = {
      name,
      seller,
      email,
      subCategory,
      price,
      quantity,
      rating,
      image,
      description,
    };

    fetch("https://craft-ease-main-server.vercel.app/allToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Toy Added Done");
          form.reset();
        }
      });
  };
  return (
    <section className="w-9/12 mx-auto mt-40">
      <h1>Add Toy</h1>

      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-3 w-full md:w-[500px] mx-auto my-10 px-4 py-8 shadow-lg rounded-lg"
      >
        <input
          type="text"
          placeholder="Enter toy name :"
          name="name"
          className="border w-full py-2 px-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter Sub Category :"
          name="category"
          className="border w-full py-2 px-3 rounded-lg"
        />
        <div className="flex flex-col md:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Enter toy name"
            defaultValue={user?.displayName}
            name="seller"
            className="border w-full py-2 px-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Enter toy name"
            defaultValue={user?.email}
            name="email"
            className="border w-full py-2 px-3 rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <input
            type="text"
            placeholder="Enter toy Price :"
            name="price"
            className="border w-full py-2 px-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Enter toy Quantity :"
            name="quantity"
            className="border w-full py-2 px-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Enter toy Rating :"
            name="rating"
            className="border w-full py-2 px-3 rounded-lg"
          />
        </div>
        <input
          type="text"
          placeholder="Enter toy Photo :"
          name="photo"
          className="border w-full py-2 px-3 rounded-lg"
        />
        <textarea
          rows={4}
          type="text"
          placeholder="Enter toy Description :"
          name="description"
          className="border w-full py-2 px-3 rounded-lg"
        />
        <button type="submit">Add Toy</button>
      </form>
    </section>
  );
};

export default AddToy;
