import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

const Post = props => {
    return (

        <div className='post-container'>
        <div className='indv-post'>
            <PostHeader 
            thumbnailUrl={props.post.thumbnailUrl}
            username={props.post.username}
            />

            <div className='post-image-container'>
                <img
                alt='thumbnail'
                className='post-image'
                src={props.post.imageUrl}
                />
            </div>

            <CommentSection 
            timestamp={props.post.timestamp}
            likes={props.post.likes}
            comments={props.post.comments}
            />
        </div>
            </div>
    )
}


export default Post;