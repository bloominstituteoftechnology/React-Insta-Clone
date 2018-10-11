import React from "react";
import PropTypes from "prop-types";
import {Comments} from "../../styles";

const CommentContent = props => {
    return (
        props.comments.map(comment => {
            return (
                <Comments key={Math.random()}>
                    <p>{comment.username}</p>
                    <p>{comment.text}</p>
                </Comments>
            );
        })
        
    );
}

CommentContent.propTypes = {
    comment: PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  };

export default CommentContent;