import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import { PostWrapper, PostContent } from "../Styles/StylePost";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    //This is my Post Container for each post.
    <PostContent>
      {/* Created a post area to map each post */}
      {props.dummyData.map(data => (
        <PostWrapper
          className="post-container"
          key={Math.random().toString() * 2}
        >
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
            id={data.timestamp}
          />
        </PostWrapper>
      ))}
    </PostContent>
  );
};

// Error checking whats passed into the Post Container
PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnail: PropTypes.string,
      key: PropTypes.string
    })
  ).isRequired
};
export default PostContainer;
