import React from '../../node_modules/react';
import './css/CommentSection.css';
import PropTypes from '../../node_modules/prop-types';


const CommentSection = props => {
    return (
  
      <div>
      <commenter>{props.comments.username}</commenter> <comment>{props.comments.text}</comment> 
      
      </div>
    )
  };


CommentSection.propTypes = {
  username: PropTypes.string,
  comments: PropTypes.string
}

export default CommentSection;