import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addCommentByUser,
  addCommentByAccount,
  getComments,
} from "../redux/ticket/ticketThunk";

export const AddComment = () => {
  const dispatch = useDispatch();
  const { account, user } = useSelector((state) => state.users);
  const { ticket } = useSelector((state) => state.tickets);
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let today =
      year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    if (account[0].account_id === "") {
      dispatch(
        addCommentByUser({
          comment_description: message,
          creation_date: today,
          ticket_id: ticket[0].ticket_id,
          user_id: user[0].user_id,
        })
      );
    } else {
      dispatch(
        addCommentByAccount({
          comment_description: message,
          creation_date: today,
          ticket_id: ticket[0].ticket_id,
          account_id: account[0].account_id,
        })
      );
    }
    setMessage("");
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <hr />
      <Form.Label className="fw-bold">Add comment</Form.Label>
      <br />
      <Form.Text>Please add your comment here</Form.Text>
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
