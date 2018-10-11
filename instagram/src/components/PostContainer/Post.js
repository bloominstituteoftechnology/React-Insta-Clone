import React from 'react';
import './PostContainer.css';
import CommentSection from './../CommentSection/CommentSection';

const Post = (props) => {
    return (
        <div className='post-content'>
            <div className='header'>
                <img src={props.postData.thumbnailUrl} alt='thumbnail' />
                <div className='username'>{props.postData.username}</div>
            </div>
            <img className='main-image' src={props.postData.imageUrl} alt='post content' />
           
            <div className='likes'>{props.postData.likes} </div>
            <CommentSection comments={props.postData.comments} timestamp={props.postData.timestamp}/>
            
        </div>
    )
}

export default Post;