import React from "react";
import Comment from "./Comment";
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

const CommentSection = props => {
    return (
      <div className="commentSection">
        <CommentInput />
          {props.dummyData.comments.map(commenters => {
            return (
              <Comment key={commenters.text.length} commentData={commenters}/>
            );
          })}
      </div>
    );
}

CommentSection.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default CommentSection;