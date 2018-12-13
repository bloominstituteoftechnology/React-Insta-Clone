import React from "react";
import './Post.css'
const Post = props => {
    return(
        <div className="post-container">
            <div className="user-info">
                <div><img src={props.thumbnailUrl} alt="User Thumbnail Image"/></div>
                <div>{props.username}</div>
            </div>
            <div className="post-image">
                <img src={props.imageUrl} alt="Post Image"/>
            </div>
        </div>
    )
}

export default Post;