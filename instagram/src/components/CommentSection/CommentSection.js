import React from 'react';
// import PropTypes from 'prop-types';
import './CommentSection.css';
// import CommentSection from '../CommentSection/CommentSection';

const CommentSection = (props) => {
  return (
    <div>
      <h2>{props.comment.username}</h2>
    </div>
  )
}


export default CommentSection;