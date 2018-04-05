import React from "react";
import heart from "./heart.svg";
import comment from "./comment.svg";
import CommentSection from "../CommentSection/CommentSection.js"
const PostContainer = props => {
    return(
        <div className="post">
            {props.data.map(post => (
                <div className="post__individual">
                    <div className="post__head">
                        <img className="post__thumbnail" src={post.thumbnailUrl} alt={post.username}/>
                        <div className="post__username">{post.username}</div>
                    </div>
                    <div>
                        <img className="post__image" src={post.imageUrl} alt="An instapost"/>
                    </div>
                    <div className="post__icons">
                        <img className="post__icon" src={heart}/>
                        <img className="post__icon post__icon-heart" src={comment}/>
                    </div>
                    <div className="likes">{post.likes} likes</div>
                    <CommentSection comments={post.comments} time={post.timestamp}/>
                </div>
            ))}
        </div>
    )
}

export default PostContainer