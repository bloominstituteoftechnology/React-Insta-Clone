import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      {props.data.map(post => {
        return (
          <div className="post-container" key={Math.random()}>
            <div className="thumbnail">
              <img
                className="thumbnail-img"
                src={post.thumbnailUrl}
                alt={post.username}
              />
              <p>{post.username}</p>
            </div>
            <img className="post-img" src={post.imageUrl} alt="post" />

            <CommentSection
              likes={post.likes}
              comments={post.comments}
              timestamp={post.timestamp}
            />
          </div> // post-container
        );
      })}
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
