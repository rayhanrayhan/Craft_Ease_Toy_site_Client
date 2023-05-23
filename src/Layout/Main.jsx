import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from "../Pages/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navber from "../Pages/Home/Navber/Navber";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Main;
