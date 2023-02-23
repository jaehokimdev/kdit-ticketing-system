import React from "react";
import "./Comments.css";

export const Comments = ({ cmts }) => {
  if (!cmts) return null;
  return cmts.map((cmt, i) => (
    <div key={cmt.comment_id} className="comments-history mt-3">
      <div className="send fw-bold text-secondary">
        <div className="sender">{cmt.sender}</div>
        <div className="date">
          {cmt.msgAt && new Date(cmt.msgAt).toLocaleString()}
        </div>
      </div>
      <div className="comment">{cmt.comment_description}</div>
    </div>
  ));
};
