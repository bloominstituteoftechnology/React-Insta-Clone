import React from "react";
import PropTypes from "prop-types";
import dummyData from '../../dummy-data.js';
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentSection = props => {
    return (
      <div>
        {props.comments.map(index => {
          return (
            <div key={index} className="comment-section">
                        <div className="comment-user">
                            {index.username}
                        </div>
                        <div className="comment-text">
                                {index.text}
                        </div>
                    </div>
                );
            })}
            
      </div>
    );
  };


// CommentSection.propTypes = {
//   comments: PropTypes.arrayOf(
//     PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
//   )
// };

export default CommentSection;
