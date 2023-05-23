import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const { signIn, googleSignIn, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignInGoogle = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Validation
    if (email === "" || password === "") {
      setError("Please enter both email and password"); // update the error message state variable
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long"); // update the error message state variable
      return;
    }
    setLoading(true);

    signIn(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log("Invalid email or password");
        form.reset();
        setLoading(false);
        toast.error("Invalid email or password");
        <ToastContainer />;
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-5 text-center">Log In</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
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
            Log In
          </button>
        </form>
        <div className="flex flex-col space-y-4 mt-5">
          <button
            onClick={handleSignInGoogle}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign in with Google
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
