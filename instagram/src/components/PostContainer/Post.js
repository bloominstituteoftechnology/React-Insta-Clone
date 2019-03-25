import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Post.css';

const Post = props => {
    return(
        <div className = 'postContainer'>
            <PostHeader dummy = {props.post}/>
            <div className = 'postImg'>
                <img src = {props.post.imageUrl} alt = 'post content'/>
            </div>
            <CommentSection comments = {props.post.comments} />
        </div>
    )
}

export default Post;