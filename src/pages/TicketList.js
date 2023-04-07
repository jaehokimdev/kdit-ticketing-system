import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TicketTable } from "../components/TicketTable";
import { SearchForm } from "../components/SearchForm";
import { TicketDropdown } from "../components/TicketDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import Iconify from "../iconify";

export const TicketList = () => {
  const { account_type } = useSelector((state) => state.users);

  return (
    <Container>
      <Row>
        {account_type === "Manager" || account_type === "Regular User" ? (
          <Col className="mt-auto">
            <Link to={"/add-ticket"}>
              <Button
                variant="contained"
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                Add New Ticket
              </Button>
            </Link>
          </Col>
        ) : (
          <Col></Col>
        )}
        <Col className="mt-auto">
          <SearchForm />
        </Col>
        <Col>
          <TicketDropdown />
        </Col>
      </Row>
      <hr style={{ marginTop: "10px" }} />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
