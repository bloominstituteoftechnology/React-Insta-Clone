import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';

const PostContainer = (props) => {
  return (
    <div>
      <div>{props.post.username}</div>
      <img className="thumbnail" src={props.post.thumbnailUrl} alt="thumbnail" />
      <img className="image" src={props.post.imageUrl} alt="image" />
      <div>{props.post.likes}</div>
      <div>{moment().format(props.post.timestamp)}</div>
      {props.post.comments.map((comment, index) => (
        <CommentSection key={`${comment.username} ${index}`} comment={comment} />
      ))}
      <input type="text" placeholder="Add a comment..." />
    </div>
  );
};
//passing down each comment after mapping through it to comment section
export default PostContainer;

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};
