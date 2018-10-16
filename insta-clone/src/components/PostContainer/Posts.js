import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import { PostWrapper } from "../Styles/StylePost";
import PropTypes from 'prop-types'


const Posts = props => {
  return (
    <PostWrapper className="post-container" key={Math.random().toString() * 2}>
      {/* Pass the Post information to Post Header */}
      <PostHeader
        username={props.data.username}
        thumbnail={props.data.thumbnailUrl}
      />
      {/* Pass comments to the comment section */}
      <CommentSection
        key={props.data.likes.toString()}
        user={props.data.username}
        comments={props.data.comments}
        likes={props.data.likes}
        image={props.data.imageUrl}
        id={props.data.index}
      />
    </PostWrapper>
  );
};
// Error checking whats passed into the Post Container
Posts.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired
        })
    ).isRequired
};
export default Posts;
