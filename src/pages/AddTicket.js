import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { AddTicketForm } from "../components/AddTicketForm";
import "./AddTicket.css";

export const AddtTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

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
