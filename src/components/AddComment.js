import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export const AddComment = ({ ticket_id }) => {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.users);
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const msgObj = {
      message,
      sender: account[0].first_name,
    };
    setMessage("");
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <hr />
      <Form.Label className="fw-bold">Add comment</Form.Label>
      <br />
      <Form.Text>Please reply your comment here</Form.Text>
      <Form.Control
        as="textarea"
        row={15}
        name="reply"
        value={message}
        onChange={handleOnChange}
      />
      <div
        style={{
          textAlign: "right",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Button variant="outline-success" type="submit">
          Add Comment
        </Button>
      </div>
    </Form>
  );
};
