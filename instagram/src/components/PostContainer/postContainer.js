import React from 'react';
import './postContainer.css';
import CommentSection from '../CommentSection/commentSection';

function PostContainer(props) {
  return (
    <dir className="container">
      <h1 className="header"><img class="thumbnail" src={props.data.thumb} alt="cokie" />{props.data.username}</h1>
      <img src={props.data.imageUrl} alt={props.data.username}/>
      {props.data.comments.map((comment) => {
            return <CommentSection 
            key={comment.id} 
            comment={comment}
            />;
			})}
    </dir>
    )
}

export default PostContainer;