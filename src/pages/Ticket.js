import React from "react";
import { Container, Row, Col, Spinner, Alert, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AddComment } from "../components/AddComment";
import { Comments } from "../components/Comments";
import { useDispatch } from "react-redux";
import { updateStatus } from "../redux/ticket/ticketThunk";

export const Ticket = () => {
  const { ticket, ticketstatus, status, error } = useSelector(
    (state) => state.tickets
  );

  const { account_type } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const isAdmin = account_type === "Admin" || account_type === "Agent";

  const options = ticketstatus.map((status) => {
    return (
      <option value={status.status_name} key={status.status_name}>
        {status.status_name.toUpperCase()}
      </option>
    );
  });

  const handleChangeStatus = (e, ticket_id) => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let today =
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

    switch (e.target.value) {
      case "open":
        dispatch(
          updateStatus({
            status_id: 1,
            ticket_id: ticket_id,
            closure_date: null,
          })
        );
        break;
      case "in progress":
        dispatch(
          updateStatus({
            status_id: 2,
            ticket_id: ticket_id,
            closure_date: null,
          })
        );
        break;
      case "solved":
        dispatch(
          updateStatus({
            status_id: 3,
            ticket_id: ticket_id,
            closure_date: null,
          })
        );
        break;
      case "closed":
        dispatch(
          updateStatus({
            status_id: 4,
            ticket_id: ticket_id,
            closure_date: today,
          })
        );
        break;
      default:
        dispatch(
          updateStatus({
            status_id: 5,
            ticket_id: ticket_id,
            closure_date: null,
          })
        );
    }
  };

  if (status === "loading" || ticket.ticket_id === "")
    return <h3>Loading ....</h3>;

  if (status === "error") return <h3>{error}</h3>;

  return (
    <Container>
      <Row>
        <Col>
          {status === "loading" && (
            <Spinner variant="primary" animation="border" />
          )}
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
      <div
        style={{
          marginTop: "30px",
          width: "100%",
          boxShadow: "0px 0px 15px -5px black",
          padding: "50px",
        }}
      >
        <Row>
          <Col className="fw-bold fs-5">
            <div className="title">TITLE : {ticket[0].title}</div>
            <div className="date">
              Date :{" "}
              {ticket[0].creation_date &&
                new Date(ticket[0].creation_date).toLocaleString()}
            </div>

            <div className="category">
              Category : {ticket[0].category_name.toUpperCase()}
            </div>
          </Col>
          <Col className="fw-bold d-flex align-items-end flex-column">
            <div className="status" style={{ minWidth: "190px" }}>
              Status :{" "}
              {isAdmin ? (
                <select
                  name="Status"
                  aria-label="Status"
                  value={ticket[0].status_name}
                  onChange={(e) => {
                    handleChangeStatus(e, ticket[0].ticket_id);
                  }}
                >
                  {options}
                </select>
              ) : ticket[0].status_name === "open" ? (
                <Badge bg="warning" text="dark">
                  {ticket[0].status_name.toUpperCase()}
                </Badge>
              ) : ticket[0].status_name === "in progress" ? (
                <Badge bg="success">
                  {ticket[0].status_name.toUpperCase()}
                </Badge>
              ) : ticket[0].status_name === "solved" ? (
                <Badge bg="info">{ticket[0].status_name.toUpperCase()}</Badge>
              ) : ticket[0].status_name === "pending" ? (
                <Badge bg="danger">{ticket[0].status_name.toUpperCase()}</Badge>
              ) : ticket[0].status_name === "closed" ? (
                <Badge bg="dark">{ticket[0].status_name.toUpperCase()}</Badge>
              ) : null}
            </div>
            <div className="priority" style={{ minWidth: "190px" }}>
              Priority :{" "}
              {ticket[0].priority_name === "low" ? (
                <Badge bg="primary">
                  {ticket[0].priority_name.toUpperCase()}
                </Badge>
              ) : null}
              {ticket[0].priority_name === "normal" ? (
                <Badge bg="success">
                  {ticket[0].priority_name.toUpperCase()}
                </Badge>
              ) : null}
              {ticket[0].priority_name === "high" ? (
                <Badge bg="warning" text="dark">
                  {ticket[0].priority_name.toUpperCase()}
                </Badge>
              ) : null}
              {ticket[0].priority_name === "critical" ? (
                <Badge bg="danger">
                  {ticket[0].priority_name.toUpperCase()}
                </Badge>
              ) : null}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 fs-5">
            <div className="body fw-bold">Content : {ticket[0].body}</div>
            <hr />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Comments />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <AddComment ticket_id={ticket[0].ticket_id} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
