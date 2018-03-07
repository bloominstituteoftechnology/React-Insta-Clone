import React from 'react';
import './PostContainer.css';
import CommentSection from './CommentSection';

const PostContainer = (props) => {
  return (
    <div className="PostContainer">
      {props.posts.map((post) => {
        return (
          <div>

            <div className="Post__header">
              <img src={post.thumbnailUrl} />
              <h3>{post.username}</h3>
            </div>

            <div className="Post__image">
              <img src={post.imageUrl} />
            </div>

            <div className="Post__body">
              <div>
                <h3 className="Post__likes">{post.likes} likes</h3>
              </div>

              <CommentSection comments={post.comments} timestamp={post.timestamp} />
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default PostContainer;