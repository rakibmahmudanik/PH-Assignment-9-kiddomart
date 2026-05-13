import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../Shared/ScrollToTop";

const AuthLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
