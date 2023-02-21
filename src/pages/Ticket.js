import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { getTicket } from "../redux/ticket/ticketThunk";

export const Ticket = () => {
  const { tid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicket(tid));
  }, [dispatch]);

  const { ticket, status, error } = useSelector((state) => state.tickets);

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
          <Col className="fw-bold text-secondary">
            <div className="subject">Title : {ticket[0].title}</div>
            <div className="date">
              Date :{" "}
              {ticket[0].creation_date &&
                new Date(ticket[0].creation_date).toLocaleString()}
            </div>
            <div className="status">
              Status : {ticket[0].status_name.toUpperCase()}
            </div>
            <div className="status">
              Category : {ticket[0].category_name.toUpperCase()}
            </div>
            <div className="status">
              Priority : {ticket[0].priority_name.toUpperCase()}
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
};
