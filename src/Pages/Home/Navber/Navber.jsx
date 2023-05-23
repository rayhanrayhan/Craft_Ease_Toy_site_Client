import React, { useContext, useState } from "react";
import logo from "./../../../../src/assets/main-logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#00add8] fixed w-full top-0 left-0 z-40 ">
      <div className="navbar w-9/12 mx-auto  flex items-center justify-between py-4">
        {/* Logo and Website Name */}
        <div className="flex items-center justify-center md:justify-start">
          <Link
            className="navbar-brand flex flex-col items-center md:flex-row"
            to="/"
          >
            <img className="w-20 h-20" src={logo} alt="Website Logo" />
            <span className="text-xl font-bold ml-2 text-[#fac2eb] ">
              CRAFTEASE
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-center hidden lg:flex flex-wrap gap-5">
          <ul className="navbar-menu inline-flex items-center ml-20 gap-5">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/allToys" className="navbar-link">
                All Toys
              </Link>
            </li>
            {user && (
              <>
                <li className="navbar-item">
                  <Link to="/my-toys" className="navbar-link">
                    My Toys
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add-toy" className="navbar-link">
                    Add A Toy
                  </Link>
                </li>
              </>
            )}

            <li className="navbar-item">
              <Link to="/blogs" className="navbar-link">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* User Profile and Dropdown Menu */}
        <div className="navbar-end flex items-center">
          <div className="relative group">
            <button className="btn btn-ghost btn-circle">
              <img src="" alt="User Profile" className="w-8 h-8" />
            </button>
            <h1 className="absolute -bottom-10 bg-white px-6 py-2 opacity-0 invisible shadow-md right-0 group-hover:opacity-100 group-hover:visible duration-300">
              {user?.displayName}
            </h1>
          </div>
        </div>
        <ul>
          {user ? (
            <li>
              <button onClick={() => logOut()}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {/* Mobile Dropdown Menu */}
        <div className="relative z-50 top-0 left-0 lg:hidden  flex ml-auto rounded">
          <div className="dropdown">
            <button
              className="btn btn-ghost relative z-50 btn-circle"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-content mt-3 shadow bg-base-100 rounded-box w-24 p-2 md:w-52 absolute right-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/toys">All Toys</Link>
                </li>
                {user && (
                  <>
                    <li>
                      <Link to="/my-toys">My Toys</Link>
                    </li>
                    <li>
                      <Link to="/add-toy">Add A Toy</Link>
                    </li>
                  </>
                )}

                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
