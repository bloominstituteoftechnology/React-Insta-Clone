import React from "react";
import "./Post.css";
const PostContainer = props => {
  return (
    <div className="post-wrapper">
      {props.posts.map(post => (
        <div className="post-container" key={post.timestamp}>
          <div className="post-header">
            <img src={post.thumbnailUrl} alt="test icon" />
            <h2 className="post-username">{post.username}</h2>
          </div>
          <div className="post-body">
            <img src={post.imageUrl} alt="Photo" />
          </div>
          <div className="post-comment-container">
            <div className="comment-icons">
              <i className="far fa-heart" />
              <i className="far fa-comment" />
              <i className="far fa-share-square" />
            </div>
            <div className="comments">
              <div className="likes">
                {post.likes} <span>likes</span>
              </div>
              {/* <div className="post-title">
                <span>{post.username}</span>
                <span>
                  Lorem ipsum, dolor sit adipisicing elit. Nostrum, unde.
                </span>
              </div> */}
              <div className="post-comments">
                {post.comments.map(comment => (
                  <div>
                    <span className="comment-username">{comment.username}</span>
                    <span>{comment.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
