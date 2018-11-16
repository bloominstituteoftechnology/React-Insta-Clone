import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import heart from "../../icons/largeHeart.png";
import qBubble from "../../icons/largeQ.png";

function PostContainer(props){
    return(
        <>
            <div className="post-header">
                <img className="thumbnail" src={props.thumbnail} alt="#"></img>
                <h2>{props.username}</h2>
            </div>
            
            <img src={props.image} alt="#"></img>
            <div className="icon-section">
                <img name={props.index} onClick={props.like} className="icons" src={heart} alt="like button"></img>
                <img className="icons" src={qBubble} alt="comment button"></img>
            </div>
            <p>{props.likes} Likes</p>
            <CommentSection comments={props.comments} postIndex={props.index}/>
            <p>time posted: {props.timestamp}</p>
        </>
    );
}

export default PostContainer;