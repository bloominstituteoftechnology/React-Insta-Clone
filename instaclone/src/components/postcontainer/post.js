import React from "react";
import CommentSection from "../commentsection/commentsection"
import PostHeader from "./postheader"
import "./postcontainer.css"

let Post = props => {
    return (
        <div className="post-border">
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
                <img
                    alt="post thumbnail"
                    className="post-image"
                    src={props.post.imageUrl}
                />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default Post;