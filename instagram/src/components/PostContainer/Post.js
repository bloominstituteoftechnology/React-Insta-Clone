import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const Post = (props) => {
    return (
        <div className='post-content'>
            <div className='header'>
                <img src={props.postData.thumbnailUrl} alt='thumbnail' />
                <div className='username'>{props.postData.username}</div>
            </div>
            <img className='main-image' src={props.postData.imageUrl} alt='post content' />
            <CommentSection postData={props.postData} />
        </div>
    )
}

export default Post;