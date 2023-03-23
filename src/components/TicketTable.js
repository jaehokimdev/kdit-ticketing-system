import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getTicket, getComments, addAgent } from "../redux/ticket/ticketThunk";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export const TicketTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{ textAlign: "center" }}>
              <TableCell style={{ textAlign: "left", fontSize: "18px" }}>
                Title
              </TableCell>
              <TableCell style={{ textAlign: "left", fontSize: "18px" }}>
                Company
              </TableCell>
              <TableCell style={{ fontSize: "18px" }}>Status</TableCell>
              <TableCell style={{ fontSize: "18px" }}>Category</TableCell>
              <TableCell style={{ fontSize: "18px" }}>Priority</TableCell>
              <TableCell style={{ fontSize: "18px" }}>Opened Date</TableCell>
              <TableCell style={{ fontSize: "18px" }}>Closed Date</TableCell>
              {isAdmin && (
                <TableCell style={{ fontSize: "18px" }}>Agent</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {searchTicketList.length ? (
              searchTicketList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((ticket, i) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={ticket.ticket_id}
                    onMouseOver={changecursor}
                    onClick={() => {
                      dispatch(getTicket(ticket.ticket_id));
                      dispatch(getComments(ticket.ticket_id));
                      navigate(`/ticket/${ticket.ticket_id}`);
                    }}
                  >
                    <TableCell>{ticket.title}</TableCell>
                    <TableCell>{ticket.client_name}</TableCell>
                    <TableCell>
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
                        <Badge bg="info">
                          {ticket.status_name.toUpperCase()}
                        </Badge>
                      ) : null}
                      {ticket.status_name === "pending" ? (
                        <Badge bg="danger">
                          {ticket.status_name.toUpperCase()}
                        </Badge>
                      ) : null}
                      {ticket.status_name === "closed" ? (
                        <Badge bg="dark">
                          {ticket.status_name.toUpperCase()}
                        </Badge>
                      ) : null}
                    </TableCell>
                    <TableCell>{ticket.category_name.toUpperCase()}</TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
                      {ticket.creation_date &&
                        new Date(ticket.creation_date).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {ticket.closure_date &&
                        new Date(ticket.closure_date).toLocaleString()}
                    </TableCell>
                    {isAdmin && (
                      <TableCell
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
                      </TableCell>
                    )}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan="8" className="text-center">
                  No Ticket
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={searchTicketList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
