import React, { Component } from 'react';

import './PostContainer.css';


const Post = props => {
    return (
        <div className="post">
            <div className="post-author">
                <img src={props.post.thumbnailUrl} alt="profile" className="profile-img"/>
                {props.post.username}
            </div>
            <div className="post-image">
                <img src={props.post.imageUrl} alt="main-img" /> 
            </div>
            <div className="post-comments">
                
            </div>
        </div>
    )
}


export default Post;