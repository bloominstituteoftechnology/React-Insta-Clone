import React from "react";
import "./CommentSection.css"
import {PostFooter} from "../../styles";

const LikesComponent = props => {
    return (
        <PostFooter>
            <i className="first fa fa-2x fa-heart-o" aria-hidden="true" onClick={props.addLikes}></i>
            <i className="fa fa-2x fa-flip-horizontal fa-comment-o" aria-hidden="true"></i>
            <p>{props.post.likes} likes</p>
        </PostFooter>
    )
}

export default LikesComponent