import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  return (
    <div className="post">
      <div className="user">
        <img
          src={props.post.thumbnailUrl}
          alt={`${props.post.username} profile`}
        />
        <h3>{props.post.username}</h3>
      </div>
      <img src={props.post.imageUrl} alt="probably toast" />
      <div className="post-data">
        <p>{props.post.likes} likes</p>
      </div>
      <CommentSection
        comments={props.post.comments}
        timestamp={props.post.timestamp}
      />
    </div>
  );
};