import React from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { AddComment } from "../components/AddComment";

export const Ticket = () => {
  const { ticket, status, error } = useSelector((state) => state.tickets);

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
              Status : {ticket[0].status_name.toUpperCase()}
            </div>
            <div className="category">
              Category : {ticket[0].category_name.toUpperCase()}
            </div>
            <div className="priority">
              Priority : {ticket[0].priority_name.toUpperCase()}
            </div>
            <div className="body">Content : {ticket[0].body}</div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col></Col>
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
