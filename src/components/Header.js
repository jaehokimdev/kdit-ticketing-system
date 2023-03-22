import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.webp";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { userActions } from "../redux/store";
import { ticketActions } from "../redux/store";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

export const Header = () => {
  const navigate = useNavigate();

  const { user, account } = useSelector((state) => state.users);

  let username;
  if (user[0].first_name !== "") {
    username = user[0].first_name + " " + user[0].last_name;
  } else {
    username = account[0].first_name + " " + account[0].last_name;
  }

  const logMeOut = () => {
    userActions.setLogoutUser();
    ticketActions.setLogoutTicket();
    navigate("/");
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Navbar className="nav-color" collapseOnSelect variant="dark" expand="md">
      <Navbar.Brand style={{ marginRight: "100px" }}>
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
        <Nav className="ms-auto pe-1" style={{ width: "250px" }}>
          <LinkContainer to="/main">
            <Nav.Link>Main</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
          <Avatar {...stringAvatar(username)} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
