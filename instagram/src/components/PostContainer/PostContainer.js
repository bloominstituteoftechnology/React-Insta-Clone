import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

// import UserThumbnail from "./UserThumbnail";
// import PostImage from "./PostImage";
// import Likes from "./Likes";
// import AddComment from "./AddComment";

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
            {/* user thumbnail */}

            <CommentSection
              image={post.imageUrl}
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

export default PostContainer;
