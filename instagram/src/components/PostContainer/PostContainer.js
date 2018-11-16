import React, { Component } from "react";
import { Fragment } from "react";
import CommentSection from "../CommentSection/CommentSection";
import "../PostContainer/PostContainer.css";
import PropTypes from "prop-types";
import { Card, CardBody, CardSubtitle, Row } from "reactstrap";

const PostContainer = props => {
  return (
    <div className="postContainer">
      {props.data.map(
        post => (
          console.log(post),
          (
            <div className="postBorder" key={post.timestamp}>
              <div className="header">
                <img className="imgThumbnail" src={post.thumbnailUrl} alt="" />
                <h2>{post.username}</h2>
              </div>
              <img className="img-main" src={post.imageUrl} alt="" />

              
              <div>{post.likes}</div>

              {post.comments.map(arg => {
                return <CommentSection key={arg.text} coolData={arg} />;
              })}
              <div className="timeStamp">{post.timestamp}</div>

            </div>
          )
        )
      )}
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ timestamp: PropTypes.string, username: PropTypes.string })
  )
};

export default PostContainer;
