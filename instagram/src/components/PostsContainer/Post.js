import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Post.css';


const Post = props => {
    return (
        <div className = 'full-post'>

        <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />

        <div className = 'post-image'>
        <img src = {props.post.imageUrl} alt='post' />
        </div>

        <CommentSection comments={props.post.comments} likes={props.post.likes}/>

        </div>
    )

}

export default Post;