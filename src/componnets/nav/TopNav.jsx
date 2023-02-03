import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import TopNavLink from "./TopNavLink";
import "../../css/TopNav.css";

const TopNav = () => {
  return (
    <Navbar sticky="top" expand="lg" className="NavBar">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            src="https://i.imagesup.co/images2/cc84878d5eb8fb4490c68081f58a0eec77d6f369.png"
            alt="logo"
          />
        </NavLink>
        <Navbar.Toggle className="burger" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="con" id="basic-navbar-nav">
          <Nav className="me-auto">
            <TopNavLink to="/" label="Movies" />
            <TopNavLink to="/favorites" label="Favorites" />
            <TopNavLink to="/about" label="About" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
