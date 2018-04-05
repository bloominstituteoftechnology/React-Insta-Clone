import React, { Component } from 'react';
import './post.css';


const Post = props => {
    return (
        <div className="container">
        {/* // spread post contents into 3 subcontainers */}

            <div className="contentHeader">
                <img className="thumbnail" src={props.userPost.thumbnailUrl} />
                <div className="username">
                    {props.userPost.username}
                </div>
            </div>

            <div className="mainImage">
                <img className="mainImage" src={props.userPost.imageUrl} />
            </div>
                
            <div className="likeAndTime">
                <div className="likes">
                    {props.userPost.likes} Likes
                </div>
                <div className="time">
                    {props.userPost.timestamp}
                </div>
            </div>
        </div> // container
        
    );
};

export default Post;