//Single comment
import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';


const Comment = props => {
  return(
    <div className="comments">

        <p><strong>{props.com.username}</strong> {props.com.text}</p>
        <p>{props.com.newComment}</p>
    </div>
  )
}

Comment.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          username: PropTypes.string
        })
      )
    })
  )
}

Comment.defaultProps = {
  dummyData: []
}

export default Comment;
