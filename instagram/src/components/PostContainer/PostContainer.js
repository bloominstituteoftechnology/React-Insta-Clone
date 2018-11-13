import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <div className="post--container">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post--img">
        <img src={props.post.imageUrl} alt=""/>
      </div>
      <CommentSection
        username={props.post.username}
        comments={props.post.comments}
        likes={props.post.likes}
        timestamp={props.post.timestamp}
        commentText={props.commentText}
        onCommentFormChange={(e, u, t) => props.onCommentFormChange(e, u, t)}
        onCommentFormSubmit={(e, u, t) => props.onCommentFormSubmit(e, u, t)}

      />
    </div>
  );
}

PostContainer.propTypes = {
  post: PropTypes.object.isRequired,
  commentText: PropTypes.object.isRequired,
  onCommentFormChange: PropTypes.func.isRequired,
  onCommentFormSubmit: PropTypes.func.isRequired,
}

export default PostContainer;