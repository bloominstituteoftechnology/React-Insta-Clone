import React, { Component } from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        props.postsList.map(post => (
            <div className='post'>
                <div>
                    <img src={post.thumbnailUrl} alt='' />
                    <h2>{post.username}</h2>
                </div>
                
                <img src={post.imageUrl} alt='' />

                <div>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <i class="fa fa-comment-o" aria-hidden="true"></i>
                    <p className='heavy-font'>{post.likes}</p>  
                </div>
                
                {post.comments.map(comment => (
                    <CommentSection comment={comment} />
                ))}

                <p className='light-font'>{post.timestamp}</p>
            </div>
        ))
            
    )    
}

export default PostContainer;