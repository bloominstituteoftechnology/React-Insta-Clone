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
                <img className="thumbnail" src={p.thumbnailUrl} />
              </div>
              <div className="username">{p.username}</div>
            </div>
            <img className="img-post" src={p.imageUrl} />
          </div>
          <div className="social-bar">
            <img className="social-likes" src={instaheart} />
            <img className="social-comments" src={comment} />
            <div className="like-tally">{p.likes} likes</div>
          </div>
          <CommentSection c={p.comments} />
          <div className="time-stamp">{p.timestamp}</div>
          <input className="add-comment" placeholder="Add a comment" />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
