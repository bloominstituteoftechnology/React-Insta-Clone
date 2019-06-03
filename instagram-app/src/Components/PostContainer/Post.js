import React from 'react';
import CommentSection from '../CommentSection/CommentSectionContainer';
import PostHeader from './PostHeader';

import './Posts.css';

const Post = props => {
    return (
        <div className='post-border'>
            <PostHeader
                username={props.post.username}
                thumbnailURL={props.post.thumbnailURL}
            />
            <div className='post-img-wrapper'>
                <img 
                    alt='post-thumbnail'
                    className='post-img'
                    src={props.post.imageUrl}
                />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default Post;