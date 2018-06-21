import React from "react";
import {CommentContainer, CommenterName} from '../Reusables/Reusables';

const Comment = props => {
  return (
    <div>
      <CommentContainer>
        <CommenterName>{props.comment.username}</CommenterName>
        {props.comment.text}
      </CommentContainer>
    </div>
  );
};


export default Comment;