import React from "react";
import "./Comments.css";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

export const Comments = ({ cmts }) => {
  const { account, user } = useSelector((state) => state.users);
  console.log(cmts);
  if (cmts.length === 0)
    return (
      <Alert variant="danger">
        <Alert.Heading className="ai-center">No Comments</Alert.Heading>
      </Alert>
    );
  return (
    <div>
      {cmts.map((cmt) => {
        const isCommentUser =
          cmt.account_id === account[0].account_id ||
          cmt.user_id === user[0].user_id;
        return (
          <div
            key={cmt.comment_id}
            className={
              isCommentUser ? "comments-user mt-3" : "comments-other mt-3"
            }
          >
            <div className="fw-bold">{cmt.Author}</div>
            <div
              className={
                isCommentUser
                  ? "commentdate-user fw-bold"
                  : "commentdate-other fw-bold"
              }
            >
              <div className="comment">{cmt.comment_description}</div>
              <div className="date fw-bold" style={{ fontSize: "10px" }}>
                {cmt.creation_date &&
                  new Date(cmt.creation_date).toLocaleString()}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
