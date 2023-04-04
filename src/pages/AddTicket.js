import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../components/AddTicketForm";
import "./AddTicket.css";

export const AddtTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="addTicket-page mt-4">
            <AddTicketForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
