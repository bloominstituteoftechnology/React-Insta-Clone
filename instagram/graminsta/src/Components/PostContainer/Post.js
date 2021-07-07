import React, {Component} from "react"
// import postHeart from "../images/instaIMG/hear.png"
// import comment from "../images/instaIMG/comment.png"
import "./PostContainer.css"


const Post = (props) => {
    return (
        <div className="post">
            <div className="postHeader">
            <img className="userAvatar" src={props.thumbnail} alt="small" />
            <h4 className="userName">{props.username}</h4>
        </div>
        <img src={props.image} />
        <div className="postFooterTop">
        <img
            onClick={() => props.postLiked(props.post)}
            className="postHeart"
            alt="heart"
            src=""
            />
            <img className="commentIcon" alt="commenticon" src="" />
            </div>
            <div className="postFooterBottom">
            <p>{props.likes}</p>
            </div>
        </div>
    )
}

export default Post;