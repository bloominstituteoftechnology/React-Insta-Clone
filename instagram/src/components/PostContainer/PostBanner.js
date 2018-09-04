import React from 'react';
import './PostContainer.css'

function PostBanner(props) {
    return (
        <div className="post-banner">
            <img src={props.bannerImg} alt="banner"/>
        </div>
    )
}

export default PostBanner;