import React from "react";
import './Post.css'
const Post = props => {
    return(
        <div className="post-container container">
            <div className="user-info ">
                <div><img src={props.thumbnailUrl} alt="User Thumbnail Image"/></div>
                <div>{props.username}</div>
            </div>
            <div className="post-image">
                <img src={props.imageUrl} alt="Post Image"/>
            </div>
            
            <div className="likes container">
                <div className="icons">
                    <i className="fa fa-heart-o"></i>
                    <i className="fa fa-comment-o"></i>
                </div>
                <div className="count">
                {props.likes} likes </div>
            </div>
            
        </div>
    )
}

export default Post;