import React from "react";
import PropTypes from "prop-types";

function CommentSection(props) {
  return (
    <ul>
      {props.commentsarray.map(({ username, text }, index) => (
        <li key={index}>
          <h5>{username}</h5>
          <p>{text}</p>
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