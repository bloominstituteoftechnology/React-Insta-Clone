import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const CommentText = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`;

const CommentComment = styled.div`
  font-weight: 300;
  font-size: 14px;
`;

const CommentUser = styled.div`
  font-weight: 500;
  font-size: 12px;
`;

const Comment = props => {
  return (
    <CommentText>
      <div className="comment-text">
        <CommentComment>
          <span className="comment">{props.comment.text}</span>{" "}
        </CommentComment>
        <CommentUser>
          <span className="user">-{props.comment.username}</span>
        </CommentUser>
      </div>
    </CommentText>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
