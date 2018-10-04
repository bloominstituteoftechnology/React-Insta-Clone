import React from "react";
import CommentSection from "./CommentSection";

const PostContainer = props => (
    <div className="post-container"> //Container which contains the entire post content
        <div className="header"> //Header section of the post which contains the profile picture and username only
            <div className="profile-picture"><img src={props.thumbnailUrl}></img></div>
            <div className="username">{props.username}</div>
        </div> //End Header
        <div className="post-picture-container"><img src={props.imageUrl}></img></div> //Contains the picture displayed in the post
        <CommentSection likes={props.likes} timestamp={props.timestamp} comments={props.comments}/> //Creating a comments section in each PostContainer that takes the props of the comments values from info passed from dummydata
    </div>
);

export default PostContainer;