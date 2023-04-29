import React from "react";
import "./Comments.css";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";

export const Comments = () => {
  const { account, user } = useSelector((state) => state.users);
  const { comments } = useSelector((state) => state.tickets);
  if (comments.length === 0)
    return (
      <Alert
        variant="filled"
        severity="warning"
        sx={{
          width: "100%",
          "& .MuiAlert-message": { textAlign: "center", width: "inherit" },
        }}
      >
        No Comments
      </Alert>
    );
  return (
    <div>
      {comments.map((cmt) => {
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
            <Chip label={cmt.Author} size="small" />
            <div
              className={
                isCommentUser
                  ? "commentdate-user fw-bold"
                  : "commentdate-other fw-bold"
              }
            >
              {isCommentUser ? (
                <Chip
                  className={"comment-user mt-1"}
                  label={cmt.comment_description}
                  color="primary"
                />
              ) : (
                <Chip
                  className={"comment-other mt-1"}
                  label={cmt.comment_description}
                  color="success"
                />
              )}
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
