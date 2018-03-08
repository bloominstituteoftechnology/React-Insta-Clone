import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
  return (
    <div>
      <div>{props.postings.username}</div>
      <img src ={props.postings.thumbnailUrl} height='60'  width='60' />
      <img src ={props.postings.imageUrl} height='600'/>
      <div>{props.postings.likes}</div>
      <div>
        {props.postings.comments.map((comment, i) => {
          return (
            <CommentSection key={i} eachComment={comment} />
          )
        })}
      </div>
    </div>
  )
};

export default PostContainer;