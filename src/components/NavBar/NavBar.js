import React from "react";
import { NavLink } from "react-router-dom";

import { Container } from "../../App.styled";
import { NavList, NavItem } from "./Navbar.styled";

import "./navBar.css";

export default function NavBar() {
  const activeLink = ({ isActive }) => ({
    color: isActive ? "red" : "grey",
    textDecoration: isActive ? "underline" : "none",
  });

  return (
    <header style={{ boxShadow: "0 5px 20px -10px #000" }}>
      <Container>
        <nav>
          <NavList>
            <NavItem>
              <NavLink className="navLink" style={activeLink} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navLink" style={activeLink} to="/movies">
                Movies
              </NavLink>
            </NavItem>
          </NavList>
        </nav>
      </Container>
    </header>
  );
}
