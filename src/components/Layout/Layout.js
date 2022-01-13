import React from "react";
import { Outlet } from "react-router";

import Navbar from "../NavBar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
