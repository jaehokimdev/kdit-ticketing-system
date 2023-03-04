import React from "react";
import { Dropdown, DropdownButton, Stack } from "react-bootstrap";
import { ticketActions } from "../redux/store";
import { useSelector } from "react-redux";

export const TicketDropdown = () => {
  const { companies } = useSelector((state) => state.tickets);

  const getTicketsByStatus = (e) => {
    ticketActions.TicketsByStatus(e);
  };

  const getTicketsByPriority = (e) => {
    ticketActions.TicketsByPriority(e);
  };

  const getTicketsByCompany = (e) => {
    console.log(e);
    ticketActions.TicketsByCompany(e.client_name);
  };

  return (
    <div className="mt-3">
      <Stack direction="horizontal">
        <DropdownButton id="selStatus" title="Status" className="ms-auto mx-3">
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
        <DropdownButton
          id="selCompany"
          title="Company"
          className="ms-auto mx-3"
        >
          <Dropdown.Item
            eventKey="all"
            onClick={() => {
              getTicketsByCompany("");
            }}
          >
            ALL
          </Dropdown.Item>
          {companies.map((company) => {
            return (
              <Dropdown.Item
                eventKey={company.client_name}
                onClick={() => {
                  getTicketsByCompany(company);
                }}
              >
                {company.client_name}
              </Dropdown.Item>
            );
          })}
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
      </Stack>
    </div>
  );
};
