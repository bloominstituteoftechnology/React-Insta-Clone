import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        props.postsList.map(post => (
            <div className='post-container' key={post.timestamp}>
                <div className='insta-user'>
                    <img src={post.thumbnailUrl} alt='User Thumbnail' className='icon' />
                    <h2>{post.username}</h2>
                </div>
                
                <img src={post.imageUrl} alt='Post Image' className='post-img' />

                <div className='comments-container'>
                    <div className='likes-container'>
                        <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i> 
                        <p className='heavy-font'>{post.likes} likes</p> 
                    </div>
                    
                    {post.comments.map((comment, idx) => (
                        <CommentSection key={idx} comment={comment} />
                    ))}

                    <p className='light-font'>{post.timestamp}</p>
                    <div className='add-comment'>
                        <input type='text' placeholder='Add a comment...'></input>
                        <div className='triple-dot'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        ))
            
    )    
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.string),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        username: PropTypes.string,
    })  
}

export default PostContainer;