import React from "react";
import "./Comments.css";

export const Comments = ({ cmts }) => {
  if (!cmts) return null;
  return cmts.map((cmt) => (
    <div key={cmt.comment_id} className="comments-user mt-3">
      <div className="fw-bold">{cmt.Author}</div>
      <div className="commentdate">
        <div className="comment fw-bold">{cmt.comment_description}</div>
        <div className="date fw-bold" style={{ fontSize: "10px" }}>
          {cmt.creation_date && new Date(cmt.creation_date).toLocaleString()}
        </div>
      </div>
    </div>
  ));
};
