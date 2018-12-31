import React from 'react';
import './PostContainer.css';
import Posts from './Posts'

const PostContainer = props => {
    return(
        <div className="posts-container-wrapper">
            {props.post.map(p => <Posts key={p.imageUrl} post={p} /> )}
        </div>
    )
}

export default PostContainer;