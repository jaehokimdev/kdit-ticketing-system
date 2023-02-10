import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../pages/ticketAction";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(filterSearchTicket(value));
  };
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Search:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              name="searchStr"
              placeholder="search ..."
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
