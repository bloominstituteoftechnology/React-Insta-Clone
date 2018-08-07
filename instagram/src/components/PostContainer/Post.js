import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const Post = props => {
    return (
        <div>
            <PostHeader
                username= {props.post.username}
                thumbnailURL= {props.post.thumbnailURL}
             />
            <div>
                <img 
                    src= {props.post.imageURL} 
                    alt= "post-main-image"
                 />
            </div>
            <CommentSection comments= {props.post.comments} />
        </div>
    );
};

export default Post;