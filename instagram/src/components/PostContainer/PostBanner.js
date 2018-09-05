import React from 'react';
import './PostContainer.css'

// Creates the banner image in the PostContainer
function PostBanner(props) {
    return (
        <div className="post-banner">
            <img src={props.bannerImg} alt="banner"/>
        </div>
    )
}

export default PostBanner;