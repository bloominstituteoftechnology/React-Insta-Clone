import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styles from './PostContainer.css';

const PostContainer = ({data}) => (
    <div className='post-container'>
        <div className='user-info'>
            <img className='user-thumbnail' src={data.thumbnailUrl} alt='user thumbnail' />
            <div className='username'>{data.username}</div>
        </div>
        <img src={data.imageUrl} alt='image posted by user' />
        <div className='image-reaction'>
            <img className='reaction-icon' src={require('../../icons/insta_heart.png')} alt='heart button'/>
            <img className='reaction-icon' src={require('../../icons/insta_comment.png')} alt='comment button'/>
        </div>
        <div className='likes'>{data.likes} likes</div>
        <CommentSection comments={data.comments}/>
        <div className='timestamp'>{data.timestamp}</div>
        <div className='add-comment'>
            <div>Add a comment...</div> 
            <img className='elipses' src={require('../../icons/insta_dots.png')} alt='more options button'/>
        </div>
    </div>
)

export default PostContainer;