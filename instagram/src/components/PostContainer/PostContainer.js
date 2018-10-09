import React from "react";
import Comments from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

const Container = props => {
  return (
    <div className="container">
      {props.data.map(thing => {
        return <Comments comments={thing.comments} key={thing.likes} />;
      })}
    </div>
  );
};

Container.propTypes = {
  comments: PropTypes.bool
};

export default Container;
