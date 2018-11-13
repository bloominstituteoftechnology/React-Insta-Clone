import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import moment from "moment";

const CommentSection = props => {
  return (
    <div className="comments">
      {props.post.comments.map(data => (
        <Comment
          user={data.username}
          text={data.text}
          key={data.username + Math.random()}
        />
      ))}
      <p className="time">
        {moment(props.post.time, "MMMM Do YYYY hh:mm:ss A").fromNow()}
      </p>
      <CommentForm
        comment={props.comment}
        add={props.addComment}
        handleChange={props.handleChange}
        time={props.post.time}
      />
    </div>
  );
};

export default CommentSection;
