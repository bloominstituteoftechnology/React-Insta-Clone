import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <>
      {props.posts.map((post, i) => (
        <div className="post-container" key={i}>
          {post.username}
          <CommentSection comments={post.comments} />
        </div>
      ))}
    </>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.array
};

export default PostContainer;
