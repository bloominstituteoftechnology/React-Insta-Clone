import React from 'react';
import './PostContainer.css'

const PostBanner = (props) => {
    return (
        <div className="post-banner">
            <img src={props.bannerImg} />
        </div>
    )
}

export default PostBanner;