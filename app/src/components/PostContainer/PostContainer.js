import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

function PostContainer(testing) {
  return(
    <div className="main">
      <div className="top">
        <img className='profile' src={testing.post.thumbnailUrl} alt="profile pic" />
        <p className="user"><strong><i>{testing.post.username}</i></strong></p>
      </div>
      <img className='post' src={testing.post.imageUrl} alt="the main pic" />
      <div className="likes">
        <p className="NoLikes">{testing.post.likes} likes</p>
      </div>
      <div className="comments">
      {
        testing.post.comments.map(SingleComment => {
          return <CommentSection
            comment={SingleComment}
          />;
        })
      }
      </div>
    </div>
  )
}

export default PostContainer;
