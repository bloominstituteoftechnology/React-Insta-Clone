import React from 'react';
import './Post.css';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
const PostContainer = (props) => {
    return (
    <div className='post-container'>
        <PostHeader 
        thumbnail = {props.data.thumbnailUrl} 
        username = {props.data.username}/>
        <PostContent 
        picture = {props.data.imageUrl}
        comments = {props.data.comments}
        likes = {props.data.likes}
         />
    </div>
    );
}

export default PostContainer;