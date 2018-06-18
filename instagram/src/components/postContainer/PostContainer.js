import React, { Component } from 'react';
// import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.content.map(post => {
                return (
                    <div key = {post.username + post.thumbnailUrl}>
                    <div class = 'userProfile'>
                        <span class = 'user-name'>{post.username}</span>
                        <img class = 'profileImg' src = {post.thumbnailUrl} alt = 'profile-picture'/>
                    </div>
                    <div class = 'postImg'>
                        <img src = {post.imageUrl} alt = 'post-picture'/>
                    </div>
                    <div class = 'likes'>
                        <span>{'♡'}</span>
                        <span>{'💬'}</span>
                        <div>{post.likes} likes</div>
                    </div> 
                    </div>
                );
            })}
        </div>
        
    )
}

export default PostContainer;


