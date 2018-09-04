import React from 'react';
import CommentSection from '../CommentSection/comment-section';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return(
    <div>
      {props.posts.map(post => <CommentSection key={post.username} comment={post} />)}
    </div>
  );

  
};

PostContainer.PropTypes = {
  post: PropTypes.arrayOf(PropTypes.object)
};



export default PostContainer;