import React from "react";
import Navbar from "./layouts/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./layouts/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
