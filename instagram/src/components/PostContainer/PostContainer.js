import React from 'react';
import PostHeader from './PostHeader';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="postContainer">
            <PostHeader item={props.item}/>
        </div>
    );
}

export default PostContainer;