import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./Post.css";
import Likes from './Likes'


const PostContainer = props => {
  return (
    <div className="PostContainer">
      <div className="postwrapper">

      <span className="accountheader">
        <img  src={props.Data.thumbnailUrl} alt="users" />
        <div>{props.Data.username}</div>
      </span>
        
        <img src={props.Data.imageUrl} alt="posted pic" />
        
        <Likes numberOfLikes={props.Data.likes}/>
        <CommentSection comments={props.Data.comments} />
        {/* <div>{props.Data.timestamp}</div> */}
      </div>
    </div>
  );
};

export default PostContainer;


