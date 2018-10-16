import React, { Component } from 'react';
import './PostContainer.css';

const PostContainer = props => {
        return
            (
                <div className="postContainer-wrapper">
                    <div src={props.instaData[0].thumbnailURL}></div>
                </div>
            )
}

export default PostContainer;