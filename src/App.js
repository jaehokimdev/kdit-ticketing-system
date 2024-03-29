import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import { AddtTicket } from "./pages/AddTicket";
import { TicketList } from "./pages/TicketList";
import { Ticket } from "./pages/Ticket";
import ThemeProvider from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route
              path="main"
              element={
                <Layout>
                  <Main />
                </Layout>
              }
            />
            <Route
              path="add-ticket"
              element={
                <Layout>
                  <AddtTicket />
                </Layout>
              }
            />
            <Route
              path="tickets"
              element={
                <Layout>
                  <TicketList />
                </Layout>
              }
            />
            <Route
              path="ticket/:tid"
              element={
                <Layout>
                  <Ticket />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
