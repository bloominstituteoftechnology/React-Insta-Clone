import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostContent from './PostContent';
import './PostContainer.css';

const PostContainer = props => {
  return(
    <div className="post-container">
      <PostContent item={props.item}/>
      <div className="footer">
        <h2>{props.item.likes} likes</h2>
        <img className="comment-icon"
          src="./PostAssets/instagram-comment-bubble.png"
          alt="/"
        />
        <img className="like-icon"
          src="./PostAssets/icons8-heart-50.png"
          alt="/"
        />
        <CommentSection comments={props.item.comments} postId={props.item.timestamp} />
      </div>
    </div>
  )
}

export default PostContainer;
