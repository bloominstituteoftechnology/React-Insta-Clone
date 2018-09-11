import React from 'react';
import instaheart from './images/instaheart.png';
import comment from './images/comment.png';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css';

const PostContainer = props => {
  return (
    <div>
      {props.p.map(p => (
        <div className="post-container">
          <div className="post-header">
            <div className="poster">
              <div key={p.username}>
                <img
                  className="thumbnail"
                  src={p.thumbnailUrl}
                  alt="user-thumbnail"
                />
              </div>
              <div className="username">{p.username}</div>
            </div>
            <img className="img-post" src={p.imageUrl} alt="image-post" />
          </div>
          <div className="social-bar">
            <img className="social-likes" src={instaheart} alt="heart" />
            <img
              className="social-comments"
              src={comment}
              alt="comment-balloon"
            />
            <div className="like-tally">{p.likes} likes</div>
          </div>
          <CommentSection c={p.comments} />
          <div className="time-stamp">{p.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
