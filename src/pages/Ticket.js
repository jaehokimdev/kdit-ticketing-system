import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PageBreadcrumb } from "../components/PageBreadcrumb";

export const Ticket = () => {
  const { tid } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedTicket, replyTicketError, replyMsg } =
    useSelector((state) => state.tickets);

  useEffect(() => {}, []);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {replyTicketError && (
            <Alert variant="danger">{replyTicketError}</Alert>
          )}
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
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
            <div className="subject">Subject : {selectedTicket.subject}</div>
            <div className="date">
              Date :{" "}
              {selectedTicket.openAt &&
                new Date(selectedTicket.openAt).toLocaleString()}
            </div>
            <div className="status">Status : {selectedTicket.status}</div>
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
