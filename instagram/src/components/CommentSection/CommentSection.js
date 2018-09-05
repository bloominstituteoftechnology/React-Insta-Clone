import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
   return (
            <div className="comment">
                <div className="bold">
                    {props.comment.username}
                </div>
                <div className="text-content">
                    {props.comment.text}
                </div>
            </div>
        );
    }



CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };


export default CommentSection;