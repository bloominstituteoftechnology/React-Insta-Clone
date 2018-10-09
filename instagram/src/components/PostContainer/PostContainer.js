import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  console.log("Post Container props are:", { props });
  return (
    <div className="PostContainer">
      <div>
        {props.posts.map((post, index) => (
          <div className="singlepost" key={index} post={post}>
            <div className='singlepost-header'><img className='sp-header-img' src={post.thumbnailUrl} alt="Phils Coffee Logo"/><h1 className='header-username'>{post.username}</h1></div>
            <div className='singlepost-main-img-container'><img className='singlepost-main-img' src={post.imageUrl} alt="Toast and coffee"/>
            </div>
            <CommentSection  updateInput = {props.updateInput} className = "comment-container" value = {props.newComment}  createComment={props.createComment} comments={post.comments}/>
          </div>
        ))}
      </div>
    </div>
  );
};






export default PostContainer;

