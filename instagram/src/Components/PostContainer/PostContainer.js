import React from 'react';
import instaheart from './instaheart.png';
import comment from './comment.jpg';
import CommentSection from './CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css';

const PostContainer = props => {
  return (
    <div>
      {props.p.map(p => (
        <div>
          <div className="post-header">
            <div key={p.username}>
              <img src={p.thumbnailUrl} />
            </div>
            <div>{p.username}</div>
            <img src={p.imageUrl} />
          </div>
          <div className="social-bar">
            <img className="social-likes" src={instaheart} />
            <img className="social-comments" src={comment} />
          </div>
          <CommentSection c={this.state.dummyData} />
          <div>{p.timestamp}</div>
        </div>
      ))}
      ;
    </div>
  );
};

export default PostContainer;
