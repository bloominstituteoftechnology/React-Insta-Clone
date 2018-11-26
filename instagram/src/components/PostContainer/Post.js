import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostsHeader from "./PostsHeader";
import './Post.css';

const Post = props => {
    return (
        <div className='post'>
        <PostsHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
        />
        <img className='post-image'
        src={props.post.imageUrl}
        />
        <CommentSection comments={props.post.comments} />
        Hello I am post
        </div>
    );
}

export default Post;