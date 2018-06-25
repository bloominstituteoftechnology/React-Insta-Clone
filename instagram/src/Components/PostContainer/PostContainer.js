import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = () => {
    return (
        <div className='post-container'>
            <div className='post-header'>
                <img className='user-thumbnail' src='' alt='User thumbnail image'/>
                <span> ~ userID goes here ~ </span>
            </div>
            <div className='post-image'>
                ~ Post Image goes here ~
            </div>
            <div className='post-content'>
                <div className='icon-bar'>
                    <i className='far fa-heart'></i>
                    <i className='far fa-comment'></i>
                </div>
                <div className='likes-count'>
                    ~ Likes count goes here ~
                </div>
                <CommentSection />
            </div>
        </div>
    );
}
 
export default PostContainer;