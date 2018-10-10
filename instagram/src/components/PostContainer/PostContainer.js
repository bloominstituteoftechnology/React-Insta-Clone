import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import HeartButton from './HeartButton.js';
import styles from './PostContainer.css';


const PostContainer = ({data, index, commentInput, searchInput}) => (
    <div className={data.username.includes(searchInput) ? 'post-container' : 'hide'}>
        <div className='user-info'>
            <img className='user-thumbnail' src={data.thumbnailUrl} alt='user thumbnail' />
            <div className='username'>{data.username}</div>
        </div>
        <img src={data.imageUrl} alt='image posted by user' />
        <div className='image-reaction'>
                <HeartButton 
                    index={index}
                    liked={data.liked}
                />
            <img className='reaction-icon' src={require('../../icons/insta_comment.png')} alt='comment button'/>
        </div>
        <div className='likes'>{data.likes} likes</div>
        <CommentSection data={data} index={index} commentInput={commentInput}/>
    </div>
)

export default PostContainer;