import React, { useEffect } from "react";
// import { Container, Row, Col, Button, Alert } from "react-bootstrap";
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
import { Grid, Container, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PieGraph from "../components/PieGraph";
import AppWidgetSummary from "../components/AppWidgetSummary";
import { useTheme } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";

const Main = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const themecolor = createTheme({
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
    // <Container>
    //   <Row>
    //     <Col>
    //       <PageBreadcrumb page="Main" />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col className="text-center mt-3">
    //       {account_type === "Regular User" || account_type === "Manager" ? (
    //         <h3>
    //           Welcome {account[0].first_name} {account[0].last_name} (
    //           {account[0].acctype_name})
    //         </h3>
    //       ) : (
    //         <h3>
    //           Welcome {user[0].first_name} {user[0].last_name} (
    //           {user[0].role_name})
    //         </h3>
    //       )}
    //     </Col>
    //   </Row>
    //   <Row className="mt-5">
    //     <Col>
    //       <Row>
    //         <Col className="text-center mt-5">
    //           <Alert variant="primary">
    //             <h2>{tickets.length}</h2>Total Tickets
    //           </Alert>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col className="text-center mt-3 mb-2">
    //           <Alert variant="warning">
    //             <h2>{openNumber}</h2>Open
    //           </Alert>
    //         </Col>
    //         <Col className="text-center mt-3 mb-2">
    //           <Alert variant="success">
    //             <h2>{progressNumber}</h2>In progress
    //           </Alert>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col className="text-center mt-3 mb-2">
    //           <Alert variant="info">
    //             <h2>{solvedNumber}</h2>Solved
    //           </Alert>
    //         </Col>
    //         <Col className="text-center mt-3 mb-2">
    //           <Alert variant="danger">
    //             <h2>{pendingNumber}</h2>Pending
    //           </Alert>
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col className="text-center mt-3">
    //           <Alert variant="dark">
    //             <h2>{closedNumber}</h2>Closed
    //           </Alert>
    //         </Col>
    //       </Row>
    //     </Col>
    //     <Col>
    //       <Grid item xs={12} md={6} lg={4} className="mt-5">
    //         <PieGraph
    //           title="Ticket Status Graph"
    //           chartData={[
    //             { label: "Open", value: openNumber },
    //             { label: "In progress", value: progressNumber },
    //             { label: "Solved", value: solvedNumber },
    //             { label: "Pending", value: pendingNumber },
    //             { label: "Closed", value: closedNumber },
    //           ]}
    //           chartColors={[
    //             themecolor.palette.custom.open,
    //             themecolor.palette.custom.prograss,
    //             themecolor.palette.custom.solved,
    //             themecolor.palette.custom.pending,
    //             themecolor.palette.custom.closed,
    //           ]}
    //         />
    //       </Grid>
    //     </Col>
    //   </Row>
    // </Container>

    <>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={12}>
            <AppWidgetSummary
              title="Total"
              total={32}
              icon={"ant-design:android-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              sx={{ mb: 3 }}
              title="New Users"
              total={1352831}
              color="info"
              icon={"ant-design:apple-filled"}
            />
            <AppWidgetSummary
              title="Bug Reports"
              total={234}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              sx={{ mb: 3 }}
              title="Item Orders"
              total={1723315}
              color="warning"
              icon={"ant-design:windows-filled"}
            />
            <AppWidgetSummary
              title="Item Orders"
              total={1723315}
              color="warning"
              icon={"ant-design:windows-filled"}
            />
          </Grid>

          <Grid sx={{ pt: 5 }} item xs={12} md={6} lg={6}>
            <PieGraph
              title="Current Visits"
              chartData={[
                { label: "America", value: 4344 },
                { label: "Asia", value: 5435 },
                { label: "Europe", value: 1443 },
                { label: "Africa", value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={12}>
            <AppWidgetSummary
              title="Bug Reports"
              total={234}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
