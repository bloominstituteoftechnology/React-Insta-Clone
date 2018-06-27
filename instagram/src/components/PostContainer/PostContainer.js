import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import PostHeader from './PostHeader';
import './Post.css';

const PostContainer = (props) => {
  return (
    <div className="post-border">
      <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
      <div className="post-image">
        <img className="image" src={props.post.imageUrl} alt="image" />
      </div>
      <i className="fa fa-heart" />
      <div>{props.post.likes}</div>
      <div>
        {moment()
          .endOf(props.post.timestamp)
          .fromNow()}
      </div>
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
