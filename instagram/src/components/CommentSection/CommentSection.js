import React from "react";
import PropTypes from "prop-types";
import './CommentSection.css'

function CommentSection(props) {
  return (
    <ul className = "comment-container">
      {props.commentsarray.map(({ username, text }, index) => (
        <li className = "comm-flex" key={index}>
          <h5 className= "comm-name">{username}</h5>
          <p className = "comm-text">{text}</p>
        </li>
      ))}
    </ul>
  );
}

CommentSection.propTypes = {
    commentsarray: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    )
}

export default CommentSection;