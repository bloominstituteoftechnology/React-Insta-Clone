import React from 'react';
import './comment.css';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
        <div className = "comment-div">  
            <h5> {props.localComment.username} </h5>
             <p> {props.localComment.text} </p>
        </div>
    )
};


Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
};
  
export default Comment;