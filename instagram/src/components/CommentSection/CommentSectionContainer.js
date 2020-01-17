import React, {useState} from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import './Comment.css';

const CommentSection = (props) => {
const [comments]= useState(props.comments)
    return (
      <div>
        {/* map through the comments data and return the Comment component */}
         {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        <CommentInput/>
      </div>
    );
  }


export default CommentSection;
