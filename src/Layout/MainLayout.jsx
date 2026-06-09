import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;
