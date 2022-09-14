import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";

export default function Navbar() {
  return (
    <NavbarComp
      variant="dark"
      bg="dark"
      expand="lg"
      className="p-2 container-fluid"
    >
      <NavbarComp.Brand href="#home">VIT Question Papers</NavbarComp.Brand>
      <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
      <NavbarComp.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link p-0" to="/home">
            <Nav.Link href="/home">Home</Nav.Link>
          </NavLink>
          <NavLink className="nav-link p-0" to="/upload">
            <Nav.Link href="/upload">Upload</Nav.Link>
          </NavLink>
        </Nav>
      </NavbarComp.Collapse>
    </NavbarComp>
  );
}
