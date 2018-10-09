import React from "react";
import Comments from "../CommentSection/comments";
import "./PostContainer.css";

const Container = props => {
  console.log(props.data);
  return (
    <div className="container">
      {props.data.map(thing => {
        return <Comments comments={thing.comments} key={thing.likes} />;
      })}
    </div>
  );
};

export default Container;
