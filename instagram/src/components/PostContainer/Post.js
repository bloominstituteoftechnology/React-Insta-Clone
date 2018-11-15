import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import { Route, Link } from "react-router-dom";

const Post = props => {
    // console.log('props.index =', props.index)
    return (
        <div className="post-border">
            <PostHeader 
                key={props.key} 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
                index={props.index}
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