import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getCategories,
  getStatus,
  getPriority,
  createNewTicket,
} from "../redux/ticket/ticketThunk";

const initialFrmDt = {
  title: "",
  body: "",
  category: "",
  priority: "",
  creation_date: "",
};

export const AddTicketForm = () => {
  const [frmData, setFrmDate] = useState(initialFrmDt);
  const [inputerror, setInputError] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getStatus());
    dispatch(getPriority());
  }, [dispatch]);

  useEffect(() => {}, [frmData]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setInputError("");
    setSuccess("");
    if (
      frmData.title === "" ||
      frmData.body === "" ||
      frmData.category === "" ||
      frmData.priority === "" ||
      frmData.account_id === ""
    ) {
      setInputError("Please input or select all Fields");
    } else {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      let today =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
      dispatch(
        createNewTicket({
          ...frmData,
          creation_date: today,
          account_id: account[0].account_id,
        })
      );
      setSuccess("Added new Ticket");
      setFrmDate(initialFrmDt);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmDate({
      ...frmData,
      [name]: value,
    });
  };

  const { categories, priority, isLoading, error } = useSelector(
    (state) => state.tickets
  );
  const { account, status, usererror } = useSelector((state) => state.users);

  if (isLoading && status === "loading") return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;
  if (usererror) return <h3>{usererror}</h3>;

  return (
    <div
      style={{
        width: "70vh",
        boxShadow: "0px 0px 15px -5px black",
        padding: "50px",
      }}
    >
      <h1 className="text-center">Add New Ticket</h1>
      <hr />
      {inputerror !== "" && <Alert variant="danger">{inputerror}</Alert>}
      {success !== "" && <Alert variant="success">{success}</Alert>}
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Title
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="title"
              value={frmData.title}
              onChange={handleOnChange}
              placeholder="title"
              minLength="3"
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Category
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              name="category"
              onChange={handleOnChange}
              value={frmData.category}
            >
              <option isInvalid value={0}>
                Select Cagtegory
              </option>
              {categories.map((category, i) => {
                return (
                  <option key={i} value={i + 1}>
                    {category.category_name.toUpperCase()}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Priority
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              name="priority"
              onChange={handleOnChange}
              value={frmData.priority}
            >
              <option isInvalid value={0}>
                Select Priority
              </option>
              {priority.map((priority, i) => {
                return (
                  <option key={i} value={i + 1}>
                    {priority.priority_name.toUpperCase()}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
        </Form.Group>
        <br />
        <Form.Group className="mt-3">
          <Form.Label>Detail</Form.Label>
          <Form.Control
            as="textarea"
            name="body"
            value={frmData.body}
            rows={5}
            onChange={handleOnChange}
          />
        </Form.Group>
        <br />
        <div className="d-grid gap-2">
          <Button type="submit" variant="outline-success" size="lg">
            Create Ticket
          </Button>
        </div>
      </Form>
    </div>
  );
};
