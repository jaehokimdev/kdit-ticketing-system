import React, { useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { useDispatch } from "react-redux";
import {
  getAllTickets,
  getTicketsById,
  getTicketsByCompany,
  getCompany,
  getStatus,
  getCategories,
} from "../redux/ticket/ticketThunk";
import { getAllUserNames } from "../redux/user/userThunk";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PieGraph from "../components/PieGraph";

const Main = () => {
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      custom: {
        open: "#ffecb5",
        prograss: "#badbcc",
        solved: "#b6effb",
        pending: "#f5c2c7",
        closed: "#bcbebf",
      },
    },
  });

  const { tickets, isLoading, error } = useSelector((state) => state.tickets);
  const { user, account, account_type, status, usererror } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (account_type === "Admin" || account_type === "Agent") {
      dispatch(getAllTickets());
    } else if (account_type === "Manager") {
      dispatch(getTicketsByCompany(account[0].client_id));
    } else if (account_type === "Regular User") {
      dispatch(getTicketsById(account[0].account_id));
    }
    dispatch(getAllUserNames());
    dispatch(getCompany());
    dispatch(getStatus());
    dispatch(getCategories());
  }, [dispatch, account_type, account]);

  const ticketsByStatus = (input) =>
    tickets.filter((ticket) => {
      return ticket.status_name === input;
    });

  let openNumber = ticketsByStatus("open").length;
  let progressNumber = ticketsByStatus("in progress").length;
  let solvedNumber = ticketsByStatus("solved").length;
  let pendingNumber = ticketsByStatus("pending").length;
  let closedNumber = ticketsByStatus("closed").length;

  if (isLoading || status === "loading") return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;
  if (usererror) return <h3>{usererror}</h3>;

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Main" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          {account_type === "Regular User" || account_type === "Manager" ? (
            <h3>
              Welcome {account[0].first_name} {account[0].last_name} (
              {account[0].acctype_name})
            </h3>
          ) : (
            <h3>
              Welcome {user[0].first_name} {user[0].last_name} (
              {user[0].role_name})
            </h3>
          )}
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Row>
            <Col className="text-center mt-5">
              <Alert variant="primary">
                <h2>{tickets.length}</h2>Total Tickets
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3 mb-2">
              <Alert variant="warning">
                <h2>{openNumber}</h2>Open
              </Alert>
            </Col>
            <Col className="text-center mt-3 mb-2">
              <Alert variant="success">
                <h2>{progressNumber}</h2>In progress
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3 mb-2">
              <Alert variant="info">
                <h2>{solvedNumber}</h2>Solved
              </Alert>
            </Col>
            <Col className="text-center mt-3 mb-2">
              <Alert variant="danger">
                <h2>{pendingNumber}</h2>Pending
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3">
              <Alert variant="dark">
                <h2>{closedNumber}</h2>Closed
              </Alert>
            </Col>
          </Row>
        </Col>
        <Col>
          <Grid item xs={12} md={6} lg={4} className="mt-5">
            <PieGraph
              title="Ticket Status Graph"
              chartData={[
                { label: "Open", value: openNumber },
                { label: "In progress", value: progressNumber },
                { label: "Solved", value: solvedNumber },
                { label: "Pending", value: pendingNumber },
                { label: "Closed", value: closedNumber },
              ]}
              chartColors={[
                theme.palette.custom.open,
                theme.palette.custom.prograss,
                theme.palette.custom.solved,
                theme.palette.custom.pending,
                theme.palette.custom.closed,
              ]}
            />
          </Grid>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
