import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const initialFrmDt = {
  title: "",
  issueDate: "",
  message: "",
  category: "",
};

export const AddTicketForm = ({ categories }) => {
  const [frmData, setFrmDate] = useState(initialFrmDt);

  useEffect(() => {}, [frmData]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmDate({
      ...frmData,
      [name]: value,
    });
  };

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
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Category
          </Form.Label>
          <Col sm={9}>
            <Form.Select name="category">
              {categories.map((category) => {
                return <option>{category}</option>;
              })}
            </Form.Select>
          </Col>
        </Form.Group>
        <br />
        <Form.Group className="mt-3">
          <Form.Label>Detail</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={frmData.message}
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
