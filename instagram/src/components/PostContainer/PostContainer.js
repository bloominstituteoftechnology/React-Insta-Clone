import React from "react";
// import PropStyles from "prop-styles";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

// import UserThumbnail from "./UserThumbnail";
// import PostImage from "./PostImage";
// import Likes from "./Likes";
// import AddComment from "./AddComment";

const PostContainer = props => {
  return (
    <div>
      {props.data.map(post => {
        return (
          <div className="post-container" key={Math.random()}>
            <div className="thumbnail">
              <img
                className="thumbnail-img"
                src={post.thumbnailUrl}
                alt={post.username}
              />
              <p>{post.username}</p>
            </div>
            {/* user thumbnail */}
            <img className="post-img" src={post.imageUrl} alt="post" />
            <div className="comments-container">
              <div className="post-icons">
                <div>
                  <i className="far fa-heart" />
                  <i className="far fa-comment" />
                  <i className="far fa-share-square" />
                </div>
                <i className="far fa-bookmark" />
              </div>
              <div className="like-count">{post.likes} likes</div>
              <CommentSection comments={post.comments} />
              <div className="timestamp">{post.timestamp}</div>
              <div className="add-comment">
                <form>
                  <input type="text" placeholder="Add a comment..." />
                </form>
                <i className="fas fa-ellipsis-h" />
              </div>
            </div>
            {/* comments section */}
          </div> // post-container
        );
      })}

      {/* <UserThumbnail
        thumb={props.data.thumbnailUrl}
        username={props.data.username}
      />
      <PostImage />
      <div className="comments-container">
        <Likes />
        <CommentSection data={props.data} />
        <div className="timestamp">2 hours ago</div>
        <AddComment />
      </div> */}
    </div>
  );
};

export default PostContainer;
