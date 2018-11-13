import React, { Component } from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        props.postsList.map(post => (
            <div className='post'>
                <h2>{post.username}</h2>
                <img src={post.imageUrl} alt='' />
                {post.comments.map(comment => (
                    <CommentSection comment={comment} />
                ))}
            </div>
        ))
            
    )    
}

export default PostContainer;