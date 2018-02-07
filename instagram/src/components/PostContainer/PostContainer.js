import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

function PostContainer(props) {
  return (
    props.dd.map((post, index) => {
    return (
        <div className="postStyle"  key={index}>
        <div className="postHeader"><img className="thumbnail" src={post.thumbnailUrl}/><div className="username">{post.username}</div></div>
        <img className="postImage" src={post.imageUrl}/>
        <CommentSection arrComments={post.comments} />
        <form className="postFooter">
          <input className="commentInput" type="text" value={props.newComment}/><button className="commentButton">Submit</button>
        </form>
      </div>
    )
      }));
  
  }
export default PostContainer;