import React from "react";
import "./CommentSection.css"

const LikesComponent = props => {
    return (
        <div className="post-footer">
            <i className="first fa fa-2x fa-heart-o" aria-hidden="true" onClick={props.addLikes}></i>
            <i className="fa fa-2x fa-flip-horizontal fa-comment-o" aria-hidden="true"></i>
            <p>{props.post.likes} likes</p>
        </div>
    )
}

export default LikesComponent