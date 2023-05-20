import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const RegisterPage = () => {
  const handleRegister = (event) => {
    const { createUser } = useContext(AuthContext);
    eveevent.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-5 text-center">Register</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-400 p-2"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-400 p-2"
              name="email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="photoURL" className="block font-bold mb-1">
              Profile picture URL
            </label>
            <input
              type="text"
              id="photoURL"
              className="border border-gray-400 p-2 w-full"
              name="photoURL"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-400 p-2"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
        <div className="flex flex-col space-y-4 mt-5">
          <p className="text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Log in here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
