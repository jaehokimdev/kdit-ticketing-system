import React, { useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllTickets } from "../redux/ticket/ticketThunk";
import { useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets());
  }, [dispatch]);

  const { tickets, isLoading, error } = useSelector((state) => state.tickets);
  const { user, status, usererror } = useSelector((state) => state.users);
  const ticketsByStatus = (input) =>
    tickets.filter((ticket) => {
      return ticket.status_name === input;
    });

  if (isLoading || status === "loading") return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;
  if (usererror) return <h3>{usererror}</h3>;

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Main" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          Welcome {user[0].last_name} {user[0].first_name}
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
            <h2>{ticketsByStatus("open").length}</h2>Open
          </Alert>
        </Col>
        <Col className="text-center mt-5 mb-2">
          <Alert variant="success">
            <h2>{ticketsByStatus("in progress").length}</h2>In progress
          </Alert>
        </Col>
        <Col className="text-center mt-5 mb-2">
          <Alert variant="info">
            <h2>{ticketsByStatus("solved").length}</h2>Solved
          </Alert>
        </Col>
        <Col className="text-center mt-5 mb-2">
          <Alert variant="danger">
            <h2>{ticketsByStatus("pending").length}</h2>Pending
          </Alert>
        </Col>
        <Col className="text-center mt-5 mb-4">
          <Alert variant="dark">
            <h2>{ticketsByStatus("closed").length}</h2>Closed
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
