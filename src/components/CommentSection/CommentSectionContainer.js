// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [postComments, setPostComments] = useState(props.comments)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        postComments.map((comment, i) => {
          return <Comment key={i} comment={comment} />
        })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
