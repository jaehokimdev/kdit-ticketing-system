import React, { useEffect } from "react";
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

const Main = () => {
  const dispatch = useDispatch();
  const themecolor = createTheme({
    palette: {
      custom: {
        open: "#D0F2FF",
        prograss: "#E9FCD4",
        solved: "#FFF7CD",
        pending: "#D6E4FF",
        closed: "#FFE7D9",
      },
    },
  });

  const { tickets, isLoading, error, companies, ticketstatus } = useSelector(
    (state) => state.tickets
  );
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

  const ticketsByClient = (input) =>
    tickets.filter((ticket) => {
      return ticket.client_name === input;
    });

  function statusData() {
    let arr = [];
    for (let i = 0; i < ticketstatus.length; i++) {
      arr.push({
        label: ticketstatus[i].status_name.toUpperCase(),
        value: ticketsByStatus(ticketstatus[i].status_name).length,
      });
    }
    return arr;
  }

  function companydata() {
    let arr = [];
    for (let i = 0; i < companies.length; i++) {
      arr.push({
        label: companies[i].client_name.toUpperCase(),
        value: ticketsByClient(companies[i].client_name).length,
      });
    }
    return arr;
  }

  let openNumber = ticketsByStatus("open").length;
  let progressNumber = ticketsByStatus("in progress").length;
  let solvedNumber = ticketsByStatus("solved").length;
  let pendingNumber = ticketsByStatus("pending").length;
  let closedNumber = ticketsByStatus("closed").length;

  if (isLoading || status === "loading") return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;
  if (usererror) return <h3>{usererror}</h3>;

  return (
    <>
      <Container maxWidth="xl">
        {account_type === "Regular User" || account_type === "Manager" ? (
          <>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Hi, Welcome back {account[0].first_name} {account[0].last_name}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  sx={{ mb: 3 }}
                  title="Total"
                  total={tickets.length}
                  icon={"mdi:ballot"}
                />
                <AppWidgetSummary
                  title="Pending"
                  total={pendingNumber}
                  color="secondary"
                  icon={"mdi:account-clock"}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  sx={{ mb: 3 }}
                  title="Open"
                  total={openNumber}
                  color="info"
                  icon={"mdi:folder-open"}
                />
                <AppWidgetSummary
                  title="Solved"
                  total={solvedNumber}
                  color="warning"
                  icon={"mdi:check-bold"}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  sx={{ mb: 3 }}
                  title="In progress"
                  total={progressNumber}
                  color="success"
                  icon={"mdi:progress-clock"}
                />
                <AppWidgetSummary
                  title="Closed"
                  total={closedNumber}
                  color="error"
                  icon={"mdi:curtains-closed"}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <PieGraph
                  title="Tickets By Status"
                  chartData={statusData()}
                  chartColors={[
                    themecolor.palette.custom.open,
                    themecolor.palette.custom.prograss,
                    themecolor.palette.custom.solved,
                    themecolor.palette.custom.pending,
                    themecolor.palette.custom.closed,
                  ]}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="h4" sx={{ mb: 5 }}>
              Hi, Welcome back {user[0].first_name} {user[0].last_name}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  title="Total"
                  total={tickets.length}
                  icon={"mdi:ballot"}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  title="Open"
                  total={openNumber}
                  color="info"
                  icon={"mdi:folder-open"}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  title="In progress"
                  total={progressNumber}
                  color="success"
                  icon={"mdi:progress-clock"}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  title="Pending"
                  total={pendingNumber}
                  color="secondary"
                  icon={"mdi:account-clock"}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  title="Solved"
                  total={solvedNumber}
                  color="warning"
                  icon={"mdi:check-bold"}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary
                  title="Closed"
                  total={closedNumber}
                  color="error"
                  icon={"mdi:curtains-closed"}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <PieGraph
                  title="Tickets By Status"
                  chartData={statusData()}
                  chartColors={[
                    themecolor.palette.custom.open,
                    themecolor.palette.custom.prograss,
                    themecolor.palette.custom.pending,
                    themecolor.palette.custom.solved,
                    themecolor.palette.custom.closed,
                  ]}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <PieGraph title="Tickets By Client" chartData={companydata()} />
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default Main;
