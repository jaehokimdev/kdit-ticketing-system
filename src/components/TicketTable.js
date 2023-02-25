import React from "react";
import { useSelector } from "react-redux";
import { Table, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { getTicket, getComments } from "../redux/ticket/ticketThunk";

export const TicketTable = () => {
  const changecursor = (e) => {
    e.target.style.cursor = "pointer";
  };

  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  if (isLoading) return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;
  return (
    <Table striped hover>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th style={{ width: "80px" }}>#</th>
          <th style={{ textAlign: "left" }}>Title</th>
          <th>Status</th>
          <th>Category</th>
          <th>Priority</th>
          <th>Opened Date</th>
          <th>closed Date</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {searchTicketList.length ? (
          searchTicketList.map((ticket, i) => (
            <LinkContainer
              to={`/ticket/${ticket.ticket_id}`}
              key={ticket.ticket_id}
              onClick={() => {
                dispatch(getTicket(ticket.ticket_id));
                dispatch(getComments(ticket.ticket_id));
              }}
            >
              <tr onMouseOver={changecursor}>
                <td>{i + 1}</td>
                <td style={{ textAlign: "left" }}>{ticket.title}</td>
                <td style={{ textAlign: "left" }}>
                  {ticket.status_name === "open" ? (
                    <Badge bg="warning" text="dark">
                      {ticket.status_name.toUpperCase()}
                    </Badge>
                  ) : null}
                  {ticket.status_name === "in progress" ? (
                    <Badge bg="success">
                      {ticket.status_name.toUpperCase()}
                    </Badge>
                  ) : null}
                  {ticket.status_name === "solved" ? (
                    <Badge bg="info">{ticket.status_name.toUpperCase()}</Badge>
                  ) : null}
                  {ticket.status_name === "pending" ? (
                    <Badge bg="danger">
                      {ticket.status_name.toUpperCase()}
                    </Badge>
                  ) : null}
                  {ticket.status_name === "closed" ? (
                    <Badge bg="dark">{ticket.status_name.toUpperCase()}</Badge>
                  ) : null}
                </td>
                <td>{ticket.category_name.toUpperCase()}</td>
                <td style={{ textAlign: "left" }}>
                  {ticket.priority_name === "low" ? (
                    <Badge bg="primary">
                      {ticket.priority_name.toUpperCase()}
                    </Badge>
                  ) : null}
                  {ticket.priority_name === "normal" ? (
                    <Badge bg="success">
                      {ticket.priority_name.toUpperCase()}
                    </Badge>
                  ) : null}
                  {ticket.priority_name === "high" ? (
                    <Badge bg="warning" text="dark">
                      {ticket.priority_name.toUpperCase()}
                    </Badge>
                  ) : null}
                  {ticket.priority_name === "critical" ? (
                    <Badge bg="danger">
                      {ticket.priority_name.toUpperCase()}
                    </Badge>
                  ) : null}
                </td>
                <td>
                  {ticket.creation_date &&
                    new Date(ticket.creation_date).toLocaleString()}
                </td>
                <td>
                  {ticket.closure_date &&
                    new Date(ticket.closure_date).toLocaleString()}
                </td>
              </tr>
            </LinkContainer>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">
              No Ticket
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
