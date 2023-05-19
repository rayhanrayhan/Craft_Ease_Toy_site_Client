import React, { useState } from "react";
import logo from "./../../../../src/assets/main-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-10/12 md:w-9/12 mx-auto">
      <div className="navbar bg-base-100">
        {/* Logo and Website Name */}
        <div className="navbar-start flex items-center gap-5">
          <a className="navbar-brand inline-flex items-center">
            <img className="w-20 h-20" src={logo} alt="Website Logo" />
            <span className="text-xl font-bold text-[#fac2eb]">CRAFTEASE</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="navbar-center hidden md:flex flex-wrap gap-5">
          <ul className="navbar-menu inline-flex items-center gap-5">
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="/toys" className="navbar-link">
                All Toys
              </a>
            </li>
            <li className="navbar-item">
              <a href="/my-toys" className="navbar-link">
                My Toys
              </a>
            </li>
            <li className="navbar-item">
              <a href="/add-toy" className="navbar-link">
                Add A Toy
              </a>
            </li>
            <li className="navbar-item">
              <a href="/blogs" className="navbar-link">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* User Profile and Dropdown Menu */}
        <div className="navbar-end flex items-center">
          <div className="dropdown">
            <button
              className="btn btn-ghost btn-circle"
              onClick={handleDropdownToggle}
            >
              <img src="" alt="User Profile" className="w-8 h-8" />
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-content shadow bg-base-100 rounded-box w-15 md:w-32 p-3 absolute right-3">
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden flex ml-auto rounded">
          <div className="dropdown">
            <button
              className="btn btn-ghost btn-circle"
              onClick={handleDropdownToggle}
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/toys">All Toys</a>
                </li>
                <li>
                  <a href="/my-toys">My Toys</a>
                </li>
                <li>
                  <a href="/add-toy">Add A Toy</a>
                </li>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
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
