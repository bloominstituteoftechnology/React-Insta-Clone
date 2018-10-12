import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div className="post-wrapper">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  postObject: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.string)
  })

}

export default PostContainer;

//iterate over list of posts and give me a new array of posts components
