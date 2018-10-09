import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styles from './PostContainer.css';

const PostContainer = ({data, index}) => (
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
        <CommentSection data={data} index={index}/>
    </div>
)

export default PostContainer;