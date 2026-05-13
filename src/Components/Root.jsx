import React, { useEffect } from "react";
import Navbar from "./layouts/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./layouts/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Shared/ScrollToTop";

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      easing: "ease-in-out",
      delay: 50,
      once: false,
    });
  }, []);
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

export default Root;
