import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Table, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getTicket, getComments, addAgent } from "../redux/ticket/ticketThunk";
import { useNavigate } from "react-router-dom";

export const TicketTable = () => {
  const navigate = useNavigate();

  const changecursor = (e) => {
    e.target.style.cursor = "pointer";
  };

  const { searchTicketList, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  const { account_type, usernames } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleChangeSelect = (e, ticket_id) => {
    dispatch(addAgent({ user_id: e.target.value, ticket_id: ticket_id }));
  };

  const options = useMemo(
    () => (
      <>
        <option value="null">No Agent</option>
        {usernames.map((name) => {
          return (
            <option value={name.user_id} key={name.name}>
              {name.name}
            </option>
          );
        })}
      </>
    ),
    [usernames]
  );

  const isAdmin = account_type === "Admin";

  if (isLoading) return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;
  return (
    <Table striped hover>
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th style={{ width: "80px", fontSize: "18px" }}>#</th>
          <th style={{ textAlign: "left", fontSize: "18px" }}>Title</th>
          <th style={{ textAlign: "left", fontSize: "18px" }}>Company</th>
          <th style={{ fontSize: "18px" }}>Status</th>
          <th style={{ fontSize: "18px" }}>Category</th>
          <th style={{ fontSize: "18px" }}>Priority</th>
          <th style={{ fontSize: "18px" }}>Opened Date</th>
          <th style={{ fontSize: "18px" }}>Closed Date</th>
          {isAdmin && <th style={{ fontSize: "18px" }}>Agent</th>}
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {searchTicketList.length ? (
          searchTicketList.map((ticket, i) => (
            <tr
              onMouseOver={changecursor}
              onClick={() => {
                dispatch(getTicket(ticket.ticket_id));
                dispatch(getComments(ticket.ticket_id));
                navigate(`/ticket/${ticket.ticket_id}`);
              }}
            >
              <td>{i + 1}</td>
              <td style={{ textAlign: "left" }}>{ticket.title}</td>
              <td style={{ textAlign: "left" }}>{ticket.client_name}</td>
              <td style={{ textAlign: "left" }}>
                {ticket.status_name === "open" ? (
                  <Badge bg="warning" text="dark">
                    {ticket.status_name.toUpperCase()}
                  </Badge>
                ) : null}
                {ticket.status_name === "in progress" ? (
                  <Badge bg="success">{ticket.status_name.toUpperCase()}</Badge>
                ) : null}
                {ticket.status_name === "solved" ? (
                  <Badge bg="info">{ticket.status_name.toUpperCase()}</Badge>
                ) : null}
                {ticket.status_name === "pending" ? (
                  <Badge bg="danger">{ticket.status_name.toUpperCase()}</Badge>
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
              {isAdmin && (
                <td
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  <select
                    name="Agent"
                    className="form-control form-control-sm"
                    aria-label="Agent"
                    value={ticket.user_id}
                    onChange={(e) => {
                      handleChangeSelect(e, ticket.ticket_id);
                    }}
                  >
                    {options}
                  </select>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center">
              No Ticket
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
