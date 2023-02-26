import React from "react";
import "./Comments.css";
import { useSelector } from "react-redux";

export const Comments = ({ cmts }) => {
  const { account, user } = useSelector((state) => state.users);

  if (!cmts) return null;
  return (
    <div>
      {cmts.map((cmt) => {
        const isCommentUser =
          cmt.user_id === user.user_id || cmt.user_id === account.account_id;
        return (
          <div
            key={cmt.comment_id}
            className={
              isCommentUser ? "comments-user mt-3" : "comments-other mt-3"
            }
          >
            <div className="fw-bold">{cmt.Author}</div>
            <div className="commentdate">
              <div className="comment fw-bold">{cmt.comment_description}</div>
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
