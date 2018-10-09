import React from "react";
import "./Post.css";
const PostContainer = () => {
  return (
    <div className="post-wrapper">
      <div className="post-container">
        <div className="post-header">
          <img
            src="http://www.mycustomer.com/sites/all/themes/pp/img/default-user.png"
            alt="test icon"
          />
          <h2 className="post-username">Test Username</h2>
        </div>
        <div className="post-body">
          <img
            src="https://images.pexels.com/photos/164175/pexels-photo-164175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Photo"
          />
        </div>
        <div className="post-comment-container">
          <div className="comment-icons">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-share-square" />
          </div>
          <div className="comments">
            <div className="likes">74 likes</div>
            <div className="post-title">
              <span>Test Account</span>
              <span>
                Lorem ipsum, dolor sit adipisicing elit. Nostrum, unde.
              </span>
            </div>
            <div className="post-comments">
              <span>Load more comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
