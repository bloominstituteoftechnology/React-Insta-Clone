import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PostHeader from '../PostContainer/PostHeader.js';
import './PostContainer.css';

const PostContainer = props => {
return (
  <div className="post-container">
 {props.postData.map(post => {
            return (
            <div className="post">
                <PostHeader username={post.username} thumbnail={post.thumbnailUrl} />
                <div className="content-img">
                    <img src={post.imageUrl} />
                </div>
                <CommentSection comments={post.comments}/>
            </div>
            )
        }
        )}
      </div>

)
}
export default PostContainer;
