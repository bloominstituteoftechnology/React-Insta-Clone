import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import "./PostContainer.css";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    //This is my Post Container for each post.
    <div className="post-content">
      {/* Created a post area to map each post */}
      {props.dummyData.map(data => (
        <div className="post-container" key={Math.random().toString() * 2}>
          {/* Pass the Post information to Post Header */}
          <PostHeader
            key={data.username}
            username={data.username}
            thumbnail={data.thumbnailUrl}
          />
          {/* Pass comments to the comment section */}
          <CommentSection
            key={data.likes.toString()}
            user={data.username}
            comments={data.comments}
            likes={data.likes}
            image={data.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

// Error checking whats passed into the Post Container
PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnail: PropTypes.image,
      key: PropTypes.string
    })
  ).isRequired
};
export default PostContainer;
