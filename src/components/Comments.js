import React from "react";
import "./Comments.css";

export const Comments = ({ cmts }) => {
  if (!cmts) return null;
  return cmts.map((cmt, i) => (
    <div key={cmt.comment_id} className="comments-history mt-3">
      <div className="send">
        <div className="comment fw-bold">{cmt.comment_description}</div>
        <div className="date">
          {cmt.creation_date && new Date(cmt.creation_date).toLocaleString()}
        </div>
      </div>
      <div className="fw-bold text-secondary">{cmt.Author}</div>
    </div>
  ));
};
