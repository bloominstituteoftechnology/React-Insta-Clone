import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        props.postsData.map((post, idx) => (
            <div className='post-container' key={post.timestamp} id={idx} >

                <div className='insta-user'>
                    <img src={post.thumbnailUrl} alt='User Thumbnail' className='icon' />
                    <h2>{post.username}</h2>
                </div>
                
                <div className='post-img'>
                    <img src={post.imageUrl} alt='Post Image' />
                </div>

                <div className='comments-container'>
                    <div className='likes-container'>
                        <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i> 
                        <p className='heavy-font'>{post.likes} likes</p> 
                    </div>
                    
                    {post.comments.map((comment, idx) => (
                        <CommentSection key={idx} index={idx} comment={comment} />
                    ))}

                    <p className='light-font'>{post.timestamp}</p>

                    <div className='add-comment'>

                        <form onSubmit={props.addComment}>
                            <input 
                                type='text' 
                                placeholder='Add a comment...' 
                                value={props.commentText}
                                onChange={props.handleComment}
                                id={idx}
                            />
                            <div className='triple-dot'>
                                <span className='dot'></span>
                                <span className='dot'></span>
                                <span className='dot'></span>
                            </div>
                        </form> 
                        
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