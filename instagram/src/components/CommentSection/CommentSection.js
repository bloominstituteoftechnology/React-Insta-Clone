import React from 'react';
import PropTypes from "prop-types";
import './CommentSection.css'

const CommentSection = (props) => {
    return (
        <>
          {props.comment.map(comment => (
              <div className="commentContainer">
                  <h2>{comment.username}</h2>
                  <p>{comment.text}</p>
             </div>
          ))}
          <h3>{props.time}</h3>
          <div className="addComment">
            <input placeholder="Add a comment..." />
            <button>...</button>
        </div>
        </>
      );
}

CommentSection.propTypes = { username: PropTypes.string.isRequired, text: PropTypes.string.isRequired, time: PropTypes.string.isRequired };


export default CommentSection