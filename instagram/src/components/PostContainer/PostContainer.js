import React from 'react';
import './PostContainer.css'
import PostHeader from './PostHeader';
import PostBanner from './PostBanner';
import PostFooter from './PostFooter';

const PostContainer = (props) => {
    return (
        <div className="post-container">
            <PostHeader thumbImg={props.thumbImg} userN={props.userN}/>
            <PostBanner bannerImg={props.imgageU}/>
            <PostFooter likes={props.likes}/>
        </div>
    )
}

export default PostContainer;