import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PostHeader from '../PostContainer/PostHeader.js';
import './PostContainer.css';

const PostContainer = props => {
    return (
    <div className="postContainer">
        {props.dummyData.map(post => {
            return (
            <div className="post">
                <PostHeader username={post.username} thumbnail={post.thumbnailUrl} />
                <div className="contentImage">
                    <img src={post.imageUrl} />
                </div>
                <CommentSection likes={post.likes} comments={post.comments}/>
            </div>
            )
        })}
    </div>  
    )
}
export default PostContainer;
