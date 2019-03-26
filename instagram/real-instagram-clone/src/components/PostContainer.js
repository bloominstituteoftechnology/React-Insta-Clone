import React from "react";
import CommentSection from "./CommentSection";

const PostContainer = props => {
  // console.log(props)
  return (
    <div className="post-container">
      {props.post.map(post => (
        <div className="post" key={post.timestamp}>
          <div className="profileName">
            <div className="userinfo">
              <img className="thumbimg" src={post.thumbnailUrl} alt="a post" />{" "}
              <h3 className="user-name">{post.username}</h3>
            </div>{" "}
          </div>
          <div>
            <img className="postimg" src={post.imageUrl} alt="a post" />
          </div>

          <div className=" interactions">
            <i class="far fa-heart" />
            <i class="far fa-comment" />
          </div>
          <div>
            <div>
              <p className="likes">{post.likes} Likes</p>
            </div>
          </div>
          <CommentSection comment={post.comments} />
        </div>
      ))}
    </div>
  );
};
export default PostContainer;
