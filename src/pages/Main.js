import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Main" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button
              variant="outline-success"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total tickets: 0</div>
          <div>Pending tickets: 0</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added Tickets</Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Main;
