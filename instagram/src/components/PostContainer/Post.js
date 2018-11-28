import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostsHeader from "./PostsHeader";
import LikeContainer from "./LikeContainer";
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
            alt=''
            />
            <CommentSection comments={props.post.comments} />        
        </div>
    );
}

export default Post;