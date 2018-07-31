import React from "react";
import CommentInput from "../CommentSection/CommentInput";
import dummyData from "../../dummy-data";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map((item, index) => {
        return (
          <div key={index}>
            <div className="username-header">
              <img className="thumbnail" src={item.thumbnailUrl} alt="user" />
              <div className="user head">{item.username}</div>
            </div>
            <img className="post-img" src={item.imageUrl} alt="Post-Image" />
            <div className="img-icons">
              <div className="img-icon-left">
                <i className="far fa-heart" />
                <i className="far fa-comment" />
                <i className="fas fa-paper-plane" />
              </div>
              <div className="img-icon-right">
                <i className="far fa-bookmark" />
              </div>
            </div>
            <div className="comment user likes">{item.likes} likes</div>
            <div>
              <CommentInput comments={item.comments} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PostContainer;
