import React, { Component } from "react";
import { Fragment } from "react";
import CommentSection from "../CommentSection/CommentSection";
import "../PostContainer/PostContainer.css";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <Fragment>
      <div className="postContainer">
        {props.data.map(
          post => (
            console.log(post),
            (
              <div key={post.timestamp}>
                <img src={post.imageUrl} alt="" />
                <img src={post.thumbnailUrl} alt="" />

                <h2>{post.username}</h2>
                <h2>{post.timestamp}</h2>
                <h2>{post.likes}</h2>

                {post.comments.map(comment => {
                  return (
                    <CommentSection key={comment.text} dataInMap={comment} />
                  );
                })}
              </div>
            )
          )
        )}
      </div>
    </Fragment>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ timestamp: PropTypes.string, username: PropTypes.string })
  )
};

export default PostContainer;
