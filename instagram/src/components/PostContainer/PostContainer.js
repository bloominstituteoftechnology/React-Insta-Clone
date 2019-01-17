import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection"
import Post from './Post';

const PostContainer = props => {
  return (
    <div className="post-container">

<div className="title">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt='thumbnail'/>
                <h3 className="title-username">{props.post.username}</h3>
            </div>
            <img className="main-img" src={props.post.imageUrl} alt='main-post' />
            <CommentSection 
                post={props.post}
                addLike={props.addLike}
                id={props.id}    
            />
      {/* {props.posts.map(post => <Post key={post.imageUrl}
       post={post} />)} */}
    </div>
      )
}

export default PostContainer;
