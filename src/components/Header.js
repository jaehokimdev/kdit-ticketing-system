import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.webp";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate("/");
  };

  return (
    <Navbar className="nav-color" collapseOnSelect variant="dark" expand="md">
      <Navbar.Brand style={{ marginRight: "80px" }}>
        <img
          src={logo}
          alt="logo"
          width="120px"
          style={{ paddingLeft: "10px" }}
        />
      </Navbar.Brand>
      <Navbar.Text
        className="mx-auto"
        style={{ fontSize: "20px", color: "white" }}
      >
        KDIT Ticket Desk
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navber-nav" />
      <Navbar.Collapse id="basic-navber-nav" className="flex-grow-0">
        <Nav className="ms-auto pe-1" style={{ width: "200px" }}>
          <LinkContainer to="/main">
            <Nav.Link>Main</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
