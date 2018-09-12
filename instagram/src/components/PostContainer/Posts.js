import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './postContainer.css';




const Posts = (props) => {
    return (
    <div className="postBox">
        <div className="userTag">
            <div className="userName">{props.post.username}</div> 
            <img className="userThumbnail" alt="thumphoto" src={props.post.thumbnailUrl} />
        </div>
        <img alt="imgurl" src={props.post.imageUrl} />
        <div className="icons">
            <img className="heartIcon" alt="iconHeart" src="/React-Insta-Clone/assets/14949.png" />
            <img className="chatbubbleIcon" alt="iconchatbubble" src="/React-Insta-Clone/assets/Sed-07-512.png" />
            <img className="followerIcon" alt="iconfollower" src="/React-Insta-Clone/assets/886412_user_512x512.png" />
        </div>
        <div>
            {props.post.likes}
            {props.post.timestamp}
        </div>
        <CommentSection comments={props.post.comments} />
        </div>
    )
};

export default Posts;
