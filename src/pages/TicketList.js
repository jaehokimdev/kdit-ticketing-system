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

      <Row style={{ marginTop: "60px" }}>
        <Col>
          <Link to={"/add-ticket"}>
            <Button
              variant="outline-success"
              style={{ fontSize: "1.3rem", padding: "10px 40px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
        <Col className="text-right">
          <SearchForm />
        </Col>
      </Row>
      <hr style={{ marginTop: "30px" }} />ㅌ
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
