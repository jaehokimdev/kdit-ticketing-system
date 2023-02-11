import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const TicketTable = () => {
  const changecursor = (e) => {
    e.target.style.cursor = "pointer";
  };

  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );

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
            <LinkContainer to={`/ticket/${ticket._id}`} key={ticket._id}>
              <tr onMouseOver={changecursor}>
                <td>{i + 1}</td>
                <td style={{ textAlign: "left" }}>{ticket.title}</td>
                <td>{ticket.status_name}</td>
                <td>{ticket.category_name}</td>
                <td>{ticket.priority_name}</td>
                <td>
                  {ticket.creation_date &&
                    new Date(ticket.creation_date).toLocaleString()}
                </td>
                <td>
                  {ticket.closure_date &&
                    new Date(ticket.creation_date).toLocaleString()}
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
