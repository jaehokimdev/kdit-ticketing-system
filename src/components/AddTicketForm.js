import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCategories } from "../redux/ticket/ticketThunk";

const initialFrmDt = {
  title: "",
  issueDate: "",
  message: "",
};

export const AddTicketForm = () => {
  const [frmData, setFrmDate] = useState(initialFrmDt);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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

  const { categories, isLoading, error } = useSelector(
    (state) => state.tickets
  );

  if (isLoading) return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;

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
              {categories.map((category, i) => {
                return <option key={i}>{category.category_name}</option>;
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
