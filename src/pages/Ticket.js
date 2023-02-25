import React from "react";
import { Container, Row, Col, Spinner, Alert, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { AddComment } from "../components/AddComment";
import { Comments } from "../components/Comments";

export const Ticket = () => {
  const { ticket, comments, status, error } = useSelector(
    (state) => state.tickets
  );

  if (status === "loading") return <h3>Loading ....</h3>;

  if (status === "error") return <h3>{error}</h3>;

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          {status === "loading" && (
            <Spinner variant="primary" animation="border" />
          )}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
      <div
        style={{
          marginTop: "30px",
          width: "100%",
          boxShadow: "0px 0px 15px -5px black",
          padding: "50px",
        }}
      >
        <Row>
          <Col className="fw-bold">
            <div className="title">Title : {ticket[0].title}</div>
            <div className="date">
              Date :{" "}
              {ticket[0].creation_date &&
                new Date(ticket[0].creation_date).toLocaleString()}
            </div>
            <div className="status">
              Status :{" "}
              {ticket[0].status_name === "open" ? (
                <Badge bg="warning" text="dark">
                  {ticket[0].status_name.toUpperCase()}
                </Badge>
              ) : null}
              {ticket[0].status_name === "in progress" ? (
                <Badge bg="success">
                  {ticket[0].status_name.toUpperCase()}
                </Badge>
              ) : null}
              {ticket[0].status_name === "solved" ? (
                <Badge bg="info">{ticket[0].status_name.toUpperCase()}</Badge>
              ) : null}
              {ticket[0].status_name === "pending" ? (
                <Badge bg="danger">{ticket[0].status_name.toUpperCase()}</Badge>
              ) : null}
              {ticket[0].status_name === "closed" ? (
                <Badge bg="dark">{ticket[0].status_name.toUpperCase()}</Badge>
              ) : null}
            </div>
            <div className="category">
              Category : {ticket[0].category_name.toUpperCase()}
            </div>
            <div className="priority">
              Priority :{" "}
              {ticket[0].priority_name === "low" ? (
                <Badge bg="primary">
                  {ticket[0].priority_name.toUpperCase()}
                </Badge>
              ) : null}
              {ticket[0].priority_name === "normal" ? (
                <Badge bg="success">
                  {ticket[0].priority_name.toUpperCase()}
                </Badge>
              ) : null}
              {ticket[0].priority_name === "high" ? (
                <Badge bg="warning" text="dark">
                  {ticket[0].priority_name.toUpperCase()}
                </Badge>
              ) : null}
              {ticket[0].priority_name === "critical" ? (
                <Badge bg="danger">
                  {ticket[0].priority_name.toUpperCase()}
                </Badge>
              ) : null}
            </div>
            <div className="body">Content : {ticket[0].body}</div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Comments cmts={comments} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <AddComment ticket_id={ticket[0].ticket_id} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
