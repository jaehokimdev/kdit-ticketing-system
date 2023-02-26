import React from "react";
import { Dropdown, DropdownButton, Col, Row } from "react-bootstrap";
import { ticketActions } from "../redux/store";

export const TicketDropdown = () => {
  const getTicketsByStatus = (e) => {
    ticketActions.TicketsByStatus(e);
  };

  const getTicketsByPriority = (e) => {
    ticketActions.TicketsByPriority(e);
  };

  return (
    <Row>
      <DropdownButton id="selStatus" title="Status">
        <Dropdown.Item
          eventKey="all"
          onClick={() => {
            getTicketsByStatus("");
          }}
        >
          ALL
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="open"
          onClick={() => {
            getTicketsByStatus("open");
          }}
        >
          OPEN
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="in progress"
          onClick={() => {
            getTicketsByStatus("in progress");
          }}
        >
          IN PROGRESS
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="pending"
          onClick={() => {
            getTicketsByStatus("pending");
          }}
        >
          PENDING
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="solved"
          onClick={() => {
            getTicketsByStatus("solved");
          }}
        >
          SOLVED
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="closed"
          onClick={() => {
            getTicketsByStatus("closed");
          }}
        >
          CLOSED
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="selPriority" title="Priority" variant="success">
        <Dropdown.Item
          eventKey="all"
          onClick={() => {
            getTicketsByPriority("");
          }}
        >
          ALL
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="low"
          onClick={() => {
            getTicketsByPriority("low");
          }}
        >
          LOW
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="normal"
          onClick={() => {
            getTicketsByPriority("normal");
          }}
        >
          NORMAL
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="high"
          onClick={() => {
            getTicketsByPriority("high");
          }}
        >
          HIGH
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="critical"
          onClick={() => {
            getTicketsByPriority("critical");
          }}
        >
          CRITICAL
        </Dropdown.Item>
      </DropdownButton>
    </Row>
  );
};
