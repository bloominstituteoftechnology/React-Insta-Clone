import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const Post = (props) => {
    return (
        <div className='post-content'>
            <div className='header'>
                <img src={props.postData.thumbnailUrl} alt='thumbnail' />
                <div className='username'>{props.postData.username}</div>
            </div>
            <img className='main-image' src={props.postData.imageUrl} alt='post content' />
            <div className='action-buttons'>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <div className='likes'>{props.postData.likes} likes</div>
            <CommentSection postData={props.postData} />
        </div>
    )
}

export default Post;