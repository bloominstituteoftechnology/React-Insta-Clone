import React from "react";
import PropTypes from "prop-types";

import sc from "styled-components";

const CommentDiv = sc.div`
  font-weight: 300;
  font-size: 14px;
  display: flex;
  
`;

const CommentP = sc.p`
  text-align: right;
  padding: 2px;
  padding-left: 4px;
`;
const UserP = sc.p`
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  margin-right: 4px;
`;

const Comment = props => {
    return (
        <CommentDiv>       
        <CommentP>{props.comment.text} </CommentP>{' '}
       
        <UserP>{props.comment.username}</UserP>
        </CommentDiv>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape ({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;