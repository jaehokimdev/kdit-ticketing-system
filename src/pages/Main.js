import React, { useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAlltickets } from "./ticketAction";
import { useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlltickets());
  }, [dispatch]);

  const { tickets, isLoading, error } = useSelector((state) => state.tickets);

  if (isLoading) return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Main" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center" style={{ marginTop: "80px" }}>
          <Alert variant="primary">
            <h2>{tickets.length}</h2>Total Tickets
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Alert variant="warning">
            <h2>{tickets.length}</h2>Open Tickets
          </Alert>
        </Col>
        <Col className="text-center mt-5 mb-2">
          <Alert variant="success">
            <h2>{tickets.length}</h2>In progress Tickets
          </Alert>
        </Col>
        <Col className="text-center mt-5 mb-2">
          <Alert variant="info">
            <h2>{tickets.length}</h2>Solved Tickets
          </Alert>
        </Col>
        <Col className="text-center mt-5 mb-2">
          <Alert variant="danger">
            <h2>{tickets.length}</h2>Pending Tickets
          </Alert>
        </Col>
        <Col className="text-center mt-5 mb-4">
          <Alert variant="dark">
            <h2>{tickets.length}</h2>Closed Tickets
          </Alert>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-center mt-5">
          <Link to="/add-ticket">
            <Button
              variant="outline-success"
              style={{ fontSize: "2rem", padding: "20px 60px" }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
        <Col className="text-center mt-5">
          <Link to="/tickets">
            <Button
              variant="outline-primary"
              style={{ fontSize: "2rem", padding: "20px 60px" }}
            >
              View Tickets
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
