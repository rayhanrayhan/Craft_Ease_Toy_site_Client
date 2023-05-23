import React from "react";

import Footer from "../Pages/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navber from "../Pages/Home/Navber/Navber";

import Banner from "../Pages/Home/Banner/Banner";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
