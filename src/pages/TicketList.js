import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { TicketTable } from "../components/TicketTable";
import { SearchForm } from "../components/SearchForm";
import { Link } from "react-router-dom";

export const TicketList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Link to={"/add-ticket"}>
            <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
