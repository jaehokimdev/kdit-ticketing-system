import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { TicketTable } from "../components/TicketTable";
import { SearchForm } from "../components/SearchForm";
import { TicketDropdown } from "../components/TicketDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TicketList = () => {
  const { account_type } = useSelector((state) => state.users);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row style={{ marginTop: "60px" }}>
        {account_type === "Manager" || account_type === "Regular User" ? (
          <Col className="mt-auto">
            <Link to={"/add-ticket"}>
              <Button
                variant="outline-success"
                style={{ fontSize: "1.3rem", padding: "10px 40px" }}
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
