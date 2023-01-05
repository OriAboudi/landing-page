import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./heaser/Footer";
import Header from "./heaser/header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Layout;
