import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const Post = props => {
    // console.log('props in Post', props)
    // console.log('props.post.comments in post.js', props.post.comments)
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

            <div>
                <CommentSection 
                    comments = {props.post.comments}
                    likes = {props.post.likes}
                    timestamp = {props.post.timestamp}
                    postId = {props.post.imageUrl}
                    // Here we're sending the comments array from state data
                />
            </div>
        </div>
    )
}

export default Post