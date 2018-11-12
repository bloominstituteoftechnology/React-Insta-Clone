import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const Post = props => {
    console.log('props in Post', props)
    return (
        <div className="post-border">
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
                <img
                    alt="post_thumnail"
                    className="insta-image"
                    src={props.post.imageUrl}
                />
            </div>

            <div className='text-icons'>
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
            </div>
            <div className='likes' >
                {`${props.post.likes} likes`}
            </div>

            <div>
                <CommentSection 
                    comments = {props.post.comments}
                    // Here we're sending the comments array from state data
                />
            </div>

        </div>
    )
}

export default Post