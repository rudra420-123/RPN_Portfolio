import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const LayOut = () => {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "black", minHeight: "75vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayOut;
